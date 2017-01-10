---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN FEE BASIS ICNS 

 property | value 
--- | --- 
 label | SPN FEE BASIS ICNS
 tag | COL
 routine | [SPNJRPFB](http://code.osehra.org/dox/Routine_SPNJRPFB_source.html)
 return value type | GLOBAL ARRAY
 description | Returns list of patient's ICNs who were Fee Basispatients during a selected date range...results are usedfor filtered reporting.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | Date to begin Fee Basis search. | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | Date to end Fee Basis search. | 