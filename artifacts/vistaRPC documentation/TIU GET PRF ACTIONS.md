---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PRF ACTIONS 

 property | value 
--- | --- 
 label | TIU GET PRF ACTIONS
 tag | GETACTS
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | ARRAY
 description | This RPC gets the Patient Record Flag History Assignments/Actions for a Patient/Title Combination.


### Method description

 property | value 
--- | --- 
 Method comment | RPC Gets PRF Action info
 Leading comment lines | "Action" is shorthand for Assignment History entry,Returns data in the following format for each Action:,TIUY(ACTID) =,FLAGNAME^ASSGNIEN^ACTIONNAME^ACTIONIEN^ACTIONDATEI^ACTIONDATEE^TIUIEN,where Integer ACTID = subscript after "HISTORY" in array returned,by GETHTIU^DGPFAPI1,Returns linkable actions (whether linked or not) for Patient DFN,and flag assoc w/ TIUTTL.,Excludes UNLINKABLE actions = Entered in Error actions (EIE) or,actions taken prior to an EIE action.,Erroneous and EIE actions may be for the wrong patient, etc.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUTTL | LITERAL |  | true | TIU DOCUMENT DEFINITION (TITLE) IEN | 
| DFN | LITERAL |  | true | Patient Pointer (file 2 IEN) | 