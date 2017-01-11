---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PRF TITLE 

 property | value 
--- | --- 
 label | TIU GET PRF TITLE
 tag | GETTITLE
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | SINGLE VALUE
 description | Returns IEN of the TIU Note Title in file 8925.1 which is associatedwith given flag for given patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTDFN | LITERAL |  | true | Patient IEN in Patient file | 
| FLAGID | LITERAL |  | true | The unique number for a particular Active Record Flag returned by $$GETACT^DGPFAPI.  See IA #3860.  See also GETFLAG^ORPRF. | 