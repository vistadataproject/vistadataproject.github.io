---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE GETSVC 

 property | value 
--- | --- 
 label | ORWPCE GETSVC
 tag | GETSVC
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | SINGLE VALUE
 description | Calculates the correct service category.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SVC | LITERAL |  |  | Initial Service Connection Category. | 
| vs:Input_Parameter-8994_02 | LOC | LITERAL |  |  | Pointer to the hospital location. | 
| vs:Input_Parameter-8994_02 | INP | LITERAL |  |  | Patient Status0 = Outpatient1 = Inpatient | 