---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LOAD RECORD FOR EDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU LOAD RECORD FOR EDIT{:/}
 tag | {::nomarkdown}GET4EDIT{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC loads the return array with data in a format consistent with thatrequired by the TIU UPDATE RECORD API.  It should be invoked when the userinvokes the Edit action, to load the dialog for editing the document.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) in file 8925 for the document to beedited.{:/} | 
| {::nomarkdown}DR {:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter allows the calling application to specify thefields to be returned in Y(FIELD #) as expected by the edit dialog. e.g., for a PROGRESS NOTE, the user may only edit the DATE/TIME OF NOTE(Field #1301), the AUTHOR OF NOTE (Field #1202), and (per user preference)the SUBJECT of the note (Field #1701) (in addition to the body of thenote, of course). For a Discharge Summary, the user may edit the URGENCYof the record (Field #.09), DICTATED BY (Field #1202), DICTATION DATE(Field #1307), ATTENDING PHYSICIAN (Field #1209), and an optional SUBJECT(if specified as preferred by the user).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GET4EDIT^[TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 Method comment | Get data in preparation for editing a record
 Input parameters | {::nomarkdown}TIUDA, DR{:/}
 Code | {::nomarkdown}  N CANEDIT,ERR,D0,DIQ2,TIUARR,TIUF,TIUI<br> I +$D(^TIU(8925,TIUDA,"TEMP")),'+$$IFTEXT() D MERGTEXT(TIUDA)<br> K ^TMP("TIUEDIT",$J),^TMP("TIULQ",$J)<br> S TIUY=$NA(^TMP("TIUEDIT",$J)),TIUARR=$NA(^TMP("TIULQ",$J))<br> S CANEDIT=$$CANDO^TIULP(TIUDA,"EDIT RECORD")<br> I +CANEDIT'>0 S ^TMP("TIUEDIT",$J,0)="~"_$P(CANEDIT,U,2) Q<br> D EXTRACT^TIULQ(TIUDA,TIUARR,.ERR,$G(DR),"",1,"IE",1)<br> I $D(ERR) M TIUY=ERR Q<br> S TIUF=0<br> F  S TIUF=$O(@TIUARR@(TIUDA,TIUF)) Q:+TIUF'>0  D<br> . S ^TMP("TIUEDIT",$J,TIUF)=TIUF_U_@TIUARR@(TIUDA,TIUF,"I")_U_@TIUARR@(TIUDA,TIUF,"E")<br> S TIUI=0<br> F  S TIUI=$O(@TIUARR@(TIUDA,"TEXT",TIUI)) Q:+TIUI'>0  D<br> . S ^TMP("TIUEDIT",$J,"TEXT",TIUI)=$G(@TIUARR@(TIUDA,"TEXT",TIUI,0))<br> S ^TMP("TIUEDIT",$J,"TEXT",0)="$TXT",^TIU(8925,"ASAVE",DUZ,TIUDA)=""<br> K @TIUARR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}