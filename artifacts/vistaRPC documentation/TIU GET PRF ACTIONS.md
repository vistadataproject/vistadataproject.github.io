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

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUTTL | LITERAL |  | true | TIU DOCUMENT DEFINITION (TITLE) IEN | 
| DFN | LITERAL |  | true | Patient Pointer (file 2 IEN) | 