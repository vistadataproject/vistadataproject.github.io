---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET LINKED PRF NOTES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET LINKED PRF NOTES{:/}
 tag | {::nomarkdown}GETNOTES{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of SIGNED, LINKED PRF notes for given patient, for givenPRF Title{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN in Patient file{:/} | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PRF Title IEN in file 8925.1{:/} | 
| {::nomarkdown}REVORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional.  Boolean flag, with 1 indicating to subscript the list of notesin reverse chronological order.  Default is chronological order.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETNOTES^[TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 Method comment | RPC gets SIGNED, LINKED PRF
 First comment | {::nomarkdown}notes titled TIUTTL for patient PTDFN<br/>Excludes Notes linked to Entered in Error (EIE) actions and<br/>notes linked to Erroneous actions (actions taken prior to<br/>EIE actions).<br/>Receives TIUY by ref; passes back<br/>TIUY = # of notes<br/>TIUY([Reverse][Incremented]InternalNoteDate) =<br/>NoteIEN^ActionName^ExternalNoteDate^AuthorName<br/>Requires PTDFN,TIUTTL<br/>Includes status Uncosigned, Completed, & Amended only.<br/>Optional REVERSE - Boolean Flag:<br/>1 - Sort notes by reverse chronological order<br/>0 (default) - Sort notes by chronological order{:/}
 Input parameters | {::nomarkdown}PTDFN<br>TIUTTL<br>REVERSE{:/}
 Code | {::nomarkdown}  N TIUDG,ACTID,TIUIDATE,TIUEDATE,TIUIEN,TIUACT,STATUS<br> N TIUAUTH,DTARRAY,HASERR,ARRAYNM<br> K TIUY ; Initialize array in case caller hasn't done so.<br> S (TIUY,ACTID)=0<br> S ARRAYNM="^TMP(""TIUPRFH"",$J)"<br> S TIUDG=$$GETHTIU^DGPFAPI1(PTDFN,TIUTTL,ARRAYNM)<br> G:'TIUDG GETNOTEX<br> S HASERR=$$HASERR^TIUPRFL(ARRAYNM)<br> F  S ACTID=$O(@ARRAYNM@("HISTORY",ACTID)) Q:'ACTID  D<br> . I ACTID=+HASERR Q  ;Entered in Error<br> . I HASERR>0,$$ISERR^TIUPRFL(ARRAYNM,ACTID,$P(HASERR,U,2)) Q  ;erroneous<br> . S TIUIEN=+@ARRAYNM@("HISTORY",ACTID,"TIUIEN")<br> . Q:TIUIEN'>0  ;TMP node may be just ^<br> . ; -- Include only complete or amended or uncosigned notes:<br> . S STATUS=$P($G(^TIU(8925,TIUIEN,0)),U,5) I '((STATUS=6)!(STATUS=7)!(STATUS=8)) Q<br> . S TIUACT=$P(@ARRAYNM@("HISTORY",ACTID,"ACTION"),U,2)<br> . N TIUFLDS,TIUERR D GETS^DIQ(8925,TIUIEN_",","1202;1301","IE","TIUFLDS","TIUERR")<br> . S TIUIDATE=TIUFLDS(8925,TIUIEN_",",1301,"I")<br> . ; -- Increment date if there are multiple notes w/ same exact date:<br> . F  S:$D(DTARRAY(TIUIDATE)) TIUIDATE=TIUIDATE+.0000001 I '$D(DTARRAY(TIUIDATE)) S DTARRAY(TIUIDATE)="" Q<br> . I $G(REVERSE) S TIUIDATE=9999999-TIUIDATE<br> . S TIUEDATE=$E(TIUFLDS(8925,TIUIEN_",",1301,"E"),1,18)<br> . I TIUEDATE="" S TIUEDATE="No Ref Date"<br> . S TIUAUTH=TIUFLDS(8925,TIUIEN_",",1202,"E")<br> . I TIUAUTH="" S TIUAUTH="No Author"<br> . S TIUY=TIUY+1<br> . S TIUY(TIUIDATE)=TIUIEN_U_TIUACT_U_TIUEDATE_U_TIUAUTH{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}