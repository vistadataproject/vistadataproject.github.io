---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWSR LIST 

 property | value 
--- | --- 
 label | ORWSR LIST
 tag | LIST
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | GLOBAL ARRAY
 description | Return list of surgery cases for a patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| patient id | LITERAL | 32 | true |  | 
| BEGIN DATE | LITERAL | 16 | true |  | 
| END DATE | LITERAL | 16 | true |  | 
| CONTEXT | LITERAL | 8 | true | Not yet implemented.  Reserved for future use. | 
| MAX | LITERAL | 8 | true |  | 