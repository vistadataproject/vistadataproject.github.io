---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB CPRS ORDER 

 property | value 
--- | --- 
 label | PSB CPRS ORDER
 tag | ORDER
 routine | [PSBRPCMO](http://code.osehra.org/dox/Routine_PSBRPCMO_source.html)
 return value type | ARRAY
 description | This RPC sets results of a Med Order Button transaction in a global for Inpatient Pharmacy to pick up.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBHDR | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | PSBREC | LIST |  | true |  | 