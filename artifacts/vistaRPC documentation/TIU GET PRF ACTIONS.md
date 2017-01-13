---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET PRF ACTIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PRF ACTIONS{:/}
 tag | {::nomarkdown}GETACTS{:/}
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets the Patient Record Flag History Assignments/Actions for a Patient/Title Combination.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC Gets PRF Action info
 Input Parameters | {::nomarkdown}TIUTTL<br/>DFN{:/}
 Lines | ```
 N TIUDG,ACTID,TIUFLAG,UNLINKBL,ARRAYNM
 S TIUY=1,ARRAYNM="^TMP(""TIUPRFH"",$J)"
 S TIUDG=$$GETHTIU^DGPFAPI1(DFN,TIUTTL,ARRAYNM)
 I 'TIUDG S TIUY="0^"_$P(TIUDG,U,2) G GETACTX
 I '$$AVAILACT^TIUPRFL("^TMP(""TIUPRFH"",$J)",,.UNLINKBL) S TIUY="0^All linkable Flag actions are already linked"
 S TIUFLAG=$P(^TMP("TIUPRFH",$J,"FLAG"),U,2)_U_$P(^TMP("TIUPRFH",$J,"ASSIGNIEN"),U)
 S ACTID=0
 F  S ACTID=$O(^TMP("TIUPRFH",$J,"HISTORY",ACTID)) Q:'+ACTID  D
 . Q:$G(UNLINKBL(ACTID))
 . S TIUY(ACTID)=TIUFLAG
 . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"ACTION"),U,2)
 . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"HISTIEN"),U,1)
 . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"DATETIME"),U,1)
 . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"DATETIME"),U,2)
 . S TIUY(ACTID)=TIUY(ACTID)_U_$P(^TMP("TIUPRFH",$J,"HISTORY",ACTID,"TIUIEN"),U,1)```
 Leading comment lines | {::nomarkdown}"Action" is shorthand for Assignment History entry<br/>Returns data in the following format for each Action:<br/>TIUY(ACTID) =<br/>FLAGNAME^ASSGNIEN^ACTIONNAME^ACTIONIEN^ACTIONDATEI^ACTIONDATEE^TIUIEN<br/>where Integer ACTID = subscript after "HISTORY" in array returned<br/>by GETHTIU^DGPFAPI1<br/>Returns linkable actions (whether linked or not) for Patient DFN<br/>and flag assoc w/ TIUTTL.<br/>Excludes UNLINKABLE actions = Entered in Error actions (EIE) or<br/>actions taken prior to an EIE action.<br/>Erroneous and EIE actions may be for the wrong patient, etc.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT DEFINITION (TITLE) IEN{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient Pointer (file 2 IEN){:/} | 




 Generated on January 13th 2017, 6:55:29 am