---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORPRF TRIGGER POPUP 

 property | value 
--- | --- 
 label | ORPRF TRIGGER POPUP
 tag | TRIGRPOP
 routine | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
 return value type | SINGLE VALUE
 description | Returns 1 if popup flag display should be triggered for given patient uponpatient selection. If not, returns 0. Does not require clean-up aftercalling it since it does not set arrays or globals.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PTDFN | LITERAL |  | true | IEN in Patient file of given patient. | 