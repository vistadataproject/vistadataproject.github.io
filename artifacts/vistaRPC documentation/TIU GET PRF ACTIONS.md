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
 Leading comment lines | {::nomarkdown}"Action" is shorthand for Assignment History entry<br/>Returns data in the following format for each Action:<br/>TIUY(ACTID) =<br/>FLAGNAME^ASSGNIEN^ACTIONNAME^ACTIONIEN^ACTIONDATEI^ACTIONDATEE^TIUIEN<br/>where Integer ACTID = subscript after "HISTORY" in array returned<br/>by GETHTIU^DGPFAPI1<br/>Returns linkable actions (whether linked or not) for Patient DFN<br/>and flag assoc w/ TIUTTL.<br/>Excludes UNLINKABLE actions = Entered in Error actions (EIE) or<br/>actions taken prior to an EIE action.<br/>Erroneous and EIE actions may be for the wrong patient, etc.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTTL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}TIU DOCUMENT DEFINITION (TITLE) IEN{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient Pointer (file 2 IEN){:/} | 




 Generated on January 13th 2017, 6:44:48 am