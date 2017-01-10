---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE FIND DIAGNOSIS 

 property | value 
--- | --- 
 label | SDOE FIND DIAGNOSIS
 tag | FINDDX
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure Call (RPC) returns a boolean indicator onwhether a specific diagnosis is associated with an encounter.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file. | 
| vs:Input_Parameter-8994_02 | DIAGNOSIS IEN | LITERAL |  | true | This is the internal entry number of an entry in the ICDDIAGNOSIS (#80) file. | 