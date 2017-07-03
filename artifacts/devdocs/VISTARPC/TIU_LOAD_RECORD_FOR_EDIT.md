---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU LOAD RECORD FOR EDIT
# TIU LOAD RECORD FOR EDIT

This RPC loads the return array with data in a format consistent with thatrequired by the TIU UPDATE RECORD API.  It should be invoked when the userinvokes the Edit action, to load the dialog for editing the document.

Property | Value
--- | ---
Label | GET4EDIT
Routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number (IEN) in file 8925 for the document to beedited.
DR  | LITERAL | 245 | true | This optional parameter allows the calling application to specify thefields to be returned in Y(FIELD #) as expected by the edit dialog. e.g., for a PROGRESS NOTE, the user may only edit the DATE/TIME OF NOTE(Field #1301), the AUTHOR OF NOTE (Field #1202), and (per user preference)the SUBJECT of the note (Field #1701) (in addition to the body of thenote, of course). For a Discharge Summary, the user may edit the URGENCYof the record (Field #.09), DICTATED BY (Field #1202), DICTATION DATE(Field #1307), ATTENDING PHYSICIAN (Field #1209), and an optional SUBJECT(if specified as preferred by the user).



### MUMPS Method Description

Property | Value
--- | ---
Method | [GET4EDIT^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
Method Comment | Get data in preparation for editing a record
Input Parameters | TIUDA, DR
Code | {::nomarkdown}<pre><code> N CANEDIT,ERR,D0,DIQ2,TIUARR,TIUF,TIUI<br/> I +$D(^TIU(8925,TIUDA,"TEMP")),'+$$IFTEXT() D MERGTEXT(TIUDA)<br/> K ^TMP("TIUEDIT",$J),^TMP("TIULQ",$J)<br/> S TIUY=$NA(^TMP("TIUEDIT",$J)),TIUARR=$NA(^TMP("TIULQ",$J))<br/> S CANEDIT=$$CANDO^TIULP(TIUDA,"EDIT RECORD")<br/> I +CANEDIT'>0 S ^TMP("TIUEDIT",$J,0)="~"_$P(CANEDIT,U,2) Q<br/> D EXTRACT^TIULQ(TIUDA,TIUARR,.ERR,$G(DR),"",1,"IE",1)<br/> I $D(ERR) M TIUY=ERR Q<br/> S TIUF=0<br/> F  S TIUF=$O(@TIUARR@(TIUDA,TIUF)) Q:+TIUF'>0  D<br/> . S ^TMP("TIUEDIT",$J,TIUF)=TIUF_U_@TIUARR@(TIUDA,TIUF,"I")_U_@TIUARR@(TIUDA,TIUF,"E")<br/> S TIUI=0<br/> F  S TIUI=$O(@TIUARR@(TIUDA,"TEXT",TIUI)) Q:+TIUI'>0  D<br/> . S ^TMP("TIUEDIT",$J,"TEXT",TIUI)=$G(@TIUARR@(TIUDA,"TEXT",TIUI,0))<br/> S ^TMP("TIUEDIT",$J,"TEXT",0)="$TXT",^TIU(8925,"ASAVE",DUZ,TIUDA)=""<br/> K @TIUARR</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}