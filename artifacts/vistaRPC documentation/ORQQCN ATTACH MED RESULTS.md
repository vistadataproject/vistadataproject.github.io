---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN ATTACH MED RESULTS 

 property | value 
--- | --- 
 label | ORQQCN ATTACH MED RESULTS
 tag | MEDCOMP
 routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
 return value type | SINGLE VALUE
 description | Allows a med result to be attached to a procedure request.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123. | 
| vs:Input_Parameter-8994_02 | Result pointer | LITERAL | 24 | true | Variable pointer to medicine result. | 
| vs:Input_Parameter-8994_02 | Date | LITERAL | 16 | true | Date the result was attached. | 
| vs:Input_Parameter-8994_02 | date |  |  |  |  | 
| vs:Input_Parameter-8994_02 | Resp Person | LITERAL | 16 |  | Pointer to file 200, for the person attaching the result. | 
| vs:Input_Parameter-8994_02 | Alerts to | LITERAL | 254 |  | Semicolon-delimited list of user DUZs to send alerts to for this action. | 