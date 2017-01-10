---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB VALIDATE ORDER 

 property | value 
--- | --- 
 label | PSB VALIDATE ORDER
 tag | EN
 routine | [PSBVDLVL](http://code.osehra.org/dox/Routine_PSBVDLVL_source.html)
 return value type | ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 10 | true | Patient IEN | 
| vs:Input_Parameter-8994_02 | PSBIEN | LITERAL |  | true | Medication Order Number | 
| vs:Input_Parameter-8994_02 | PSBTYPE | LITERAL | 2 | true | Order Type U for unit dose orderV for IV order | 
| vs:Input_Parameter-8994_02 | PSBADMIN | LITERAL |  | true | Administration date/time, if one is present. | 
| vs:Input_Parameter-8994_02 | PSBTAB | LITERAL | 10 | true | Medication tab the order is on. | 
| vs:Input_Parameter-8994_02 | PSBUID | LITERAL |  | true | The actual scan value. | 
| vs:Input_Parameter-8994_02 | PSBASTS | LITERAL |  | true | Current scan status of the VDL of the medication. | 
| vs:Input_Parameter-8994_02 | PSBORSTS | LITERAL |  | true | Current order status on the VDL> | 
| vs:Input_Parameter-8994_02 | PSBRMV |  |  | true | Action the user is trying to take. | 
| vs:Input_Parameter-8994_02 | psbdien |  |  |  |  | 