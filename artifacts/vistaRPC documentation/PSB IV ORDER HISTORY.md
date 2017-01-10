---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB IV ORDER HISTORY 

 property | value 
--- | --- 
 label | PSB IV ORDER HISTORY
 tag | GETOHIST
 routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
 return value type | GLOBAL ARRAY
 description | Returns individual detailed bag history.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Patients IEN number | 
| vs:Input_Parameter-8994_02 | PSBORD | LITERAL |  | true | Order number from Inpatient Medications | 