---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE HASVISIT 

 property | value 
--- | --- 
 label | ORWPCE HASVISIT
 tag | HASVISIT
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | SINGLE VALUE
 description | Returns the visit status of the visit associated with a note:1 if the visit is being pointed to by an appointment0 if the visit is NOT being pointed to by an appointment-1 if the visit is invalid or could not be determined

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  |  | IEN of the Note. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  |  | Patient DFN. | 
| vs:Input_Parameter-8994_02 | ORLOC | LITERAL |  |  | Hospital Location. | 
| vs:Input_Parameter-8994_02 | ORDTE | LITERAL |  |  | Visit Date | 