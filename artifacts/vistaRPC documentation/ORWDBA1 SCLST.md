---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA1 SCLST 

 property | value 
--- | --- 
 label | ORWDBA1 SCLST
 tag | SCLST
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | ARRAY
 description | Array of Order ID's and SC.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 50 | true | Patient IEN. | 
| vs:Input_Parameter-8994_02 | ORLST | LIST | 255 | true | List of Orders. | 