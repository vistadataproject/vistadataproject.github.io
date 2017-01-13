---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET LINKED PRF NOTES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET LINKED PRF NOTES{:/}
 tag | {::nomarkdown}GETNOTES{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of SIGNED, LINKED PRF notes for given patient, for givenPRF Title{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC gets SIGNED, LINKED PRF
 Input Parameters | {::nomarkdown}PTDFN<br/>TIUTTL<br/>REVERSE{:/}
 Lines | ```
 N TIUDG,ACTID,TIUIDATE,TIUEDATE,TIUIEN,TIUACT,STATUS
 N TIUAUTH,DTARRAY,HASERR,ARRAYNM
 K TIUY ; Initialize array in case caller hasn't done so.
 S (TIUY,ACTID)=0
 S ARRAYNM="^TMP(""TIUPRFH"",$J)"
 S TIUDG=$$GETHTIU^DGPFAPI1(PTDFN,TIUTTL,ARRAYNM)
 G:'TIUDG GETNOTEX
 S HASERR=$$HASERR^TIUPRFL(ARRAYNM)
 F  S ACTID=$O(@ARRAYNM@("HISTORY",ACTID)) Q:'ACTID  D
 . I ACTID=+HASERR Q  ;Entered in Error
 . I HASERR>0,$$ISERR^TIUPRFL(ARRAYNM,ACTID,$P(HASERR,U,2)) Q  ;erroneous
 . S TIUIEN=+@ARRAYNM@("HISTORY",ACTID,"TIUIEN")
 . Q:TIUIEN'>0  ;TMP node may be just ^
 . ; -- Include only complete or amended or uncosigned notes:
 . S STATUS=$P($G(^TIU(8925,TIUIEN,0)),U,5) I '((STATUS=6)!(STATUS=7)!(STATUS=8)) Q
 . S TIUACT=$P(@ARRAYNM@("HISTORY",ACTID,"ACTION"),U,2)
 . N TIUFLDS,TIUERR D GETS^DIQ(8925,TIUIEN_",","1202;1301","IE","TIUFLDS","TIUERR")
 . S TIUIDATE=TIUFLDS(8925,TIUIEN_",",1301,"I")
 . ; -- Increment date if there are multiple notes w/ same exact date:
 . F  S:$D(DTARRAY(TIUIDATE)) TIUIDATE=TIUIDATE+.0000001 I '$D(DTARRAY(TIUIDATE)) S DTARRAY(TIUIDATE)="" Q
 . I $G(REVERSE) S TIUIDATE=9999999-TIUIDATE
 . S TIUEDATE=$E(TIUFLDS(8925,TIUIEN_",",1301,"E"),1,18)
 . I TIUEDATE="" S TIUEDATE="No Ref Date"
 . S TIUAUTH=TIUFLDS(8925,TIUIEN_",",1202,"E")
 . I TIUAUTH="" S TIUAUTH="No Author"
 . S TIUY=TIUY+1
 . S TIUY(TIUIDATE)=TIUIEN_U_TIUACT_U_TIUEDATE_U_TIUAUTH```
 Leading comment lines | {::nomarkdown}notes titled TIUTTL for patient PTDFN<br/>Excludes Notes linked to Entered in Error (EIE) actions and<br/>notes linked to Erroneous actions (actions taken prior to<br/>EIE actions).<br/>Receives TIUY by ref; passes back<br/>TIUY = # of notes<br/>TIUY([Reverse][Incremented]InternalNoteDate) =<br/>NoteIEN^ActionName^ExternalNoteDate^AuthorName<br/>Requires PTDFN,TIUTTL<br/>Includes status Uncosigned, Completed, & Amended only.<br/>Optional REVERSE - Boolean Flag:<br/>1 - Sort notes by reverse chronological order<br/>0 (default) - Sort notes by chronological order{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN in Patient file{:/} | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PRF Title IEN in file 8925.1{:/} | 
| {::nomarkdown}REVORDER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional.  Boolean flag, with 1 indicating to subscript the list of notesin reverse chronological order.  Default is chronological order.{:/} | 




 Generated on January 13th 2017, 6:55:29 am