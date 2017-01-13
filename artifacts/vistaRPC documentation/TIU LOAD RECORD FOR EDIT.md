---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LOAD RECORD FOR EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU LOAD RECORD FOR EDIT{:/}
 tag | {::nomarkdown}GET4EDIT{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC loads the return array with data in a format consistent with thatrequired by the TIU UPDATE RECORD API.  It should be invoked when the userinvokes the Edit action, to load the dialog for editing the document.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get data in preparation for editing a record
 Input Parameters | {::nomarkdown}TIUDA<br/>DR{:/}
 Lines | ```
 N CANEDIT,ERR,D0,DIQ2,TIUARR,TIUF,TIUI
 I +$D(^TIU(8925,TIUDA,"TEMP")),'+$$IFTEXT() D MERGTEXT(TIUDA)
 K ^TMP("TIUEDIT",$J),^TMP("TIULQ",$J)
 S TIUY=$NA(^TMP("TIUEDIT",$J)),TIUARR=$NA(^TMP("TIULQ",$J))
 S CANEDIT=$$CANDO^TIULP(TIUDA,"EDIT RECORD")
 I +CANEDIT'>0 S ^TMP("TIUEDIT",$J,0)="~"_$P(CANEDIT,U,2) Q
 D EXTRACT^TIULQ(TIUDA,TIUARR,.ERR,$G(DR),"",1,"IE",1)
 I $D(ERR) M TIUY=ERR Q
 S TIUF=0
 F  S TIUF=$O(@TIUARR@(TIUDA,TIUF)) Q:+TIUF'>0  D
 . S ^TMP("TIUEDIT",$J,TIUF)=TIUF_U_@TIUARR@(TIUDA,TIUF,"I")_U_@TIUARR@(TIUDA,TIUF,"E")
 S TIUI=0
 F  S TIUI=$O(@TIUARR@(TIUDA,"TEXT",TIUI)) Q:+TIUI'>0  D
 . S ^TMP("TIUEDIT",$J,"TEXT",TIUI)=$G(@TIUARR@(TIUDA,"TEXT",TIUI,0))
 S ^TMP("TIUEDIT",$J,"TEXT",0)="$TXT",^TIU(8925,"ASAVE",DUZ,TIUDA)=""
 K @TIUARR```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number (IEN) in file 8925 for the document to beedited.{:/} | 
| {::nomarkdown}DR {:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This optional parameter allows the calling application to specify thefields to be returned in Y(FIELD #) as expected by the edit dialog. e.g., for a PROGRESS NOTE, the user may only edit the DATE/TIME OF NOTE(Field #1301), the AUTHOR OF NOTE (Field #1202), and (per user preference)the SUBJECT of the note (Field #1701) (in addition to the body of thenote, of course). For a Discharge Summary, the user may edit the URGENCYof the record (Field #.09), DICTATED BY (Field #1202), DICTATION DATE(Field #1307), ATTENDING PHYSICIAN (Field #1209), and an optional SUBJECT(if specified as preferred by the user).{:/} | 




 Generated on January 13th 2017, 6:55:28 am