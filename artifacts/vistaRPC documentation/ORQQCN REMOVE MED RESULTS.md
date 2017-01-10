---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN REMOVE MED RESULTS 

 property | value 
--- | --- 
 label | ORQQCN REMOVE MED RESULTS
 tag | REMOVE
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | SINGLE VALUE
 description | Allows removal of medicine results from a  procedure.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123. | 
| vs:Input_Parameter-8994_02 | Med Result | LITERAL | 24 | true | Variable pointer to medicine result. | 
| vs:Input_Parameter-8994_02 | Date | LITERAL | 16 |  | Date the result was removed. | 
| vs:Input_Parameter-8994_02 | Resp Person | LITERAL | 16 |  | Pointer to file 200 for the person removing the result. | 