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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 10 | true | Patient IEN | 
| PSBIEN | LITERAL |  | true | Medication Order Number | 
| PSBTYPE | LITERAL | 2 | true | Order Type U for unit dose orderV for IV order | 
| PSBADMIN | LITERAL |  | true | Administration date/time, if one is present. | 
| PSBTAB | LITERAL | 10 | true | Medication tab the order is on. | 
| PSBUID | LITERAL |  | true | The actual scan value. | 
| PSBASTS | LITERAL |  | true | Current scan status of the VDL of the medication. | 
| PSBORSTS | LITERAL |  | true | Current order status on the VDL> | 
| PSBRMV |  |  | true | Action the user is trying to take. | 
| psbdien |  |  |  |  | 




Generated on January 11th 2017, 6:34:23 am