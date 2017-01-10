---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQLR DETAIL 

 property | value 
--- | --- 
 label | ORQQLR DETAIL
 tag | DETAIL
 routine | [ORQQLR](http://code.osehra.org/dox/Routine_ORQQLR_source.html)
 return value type | ARRAY
 description | Returns the details of a lab order.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL | 16 | true | Patient identifier (DFN) from Patient File [#2] | 
| vs:Input_Parameter-8994_02 | ORDER NUMBER | LITERAL | 16 | true | OE/RR order number from the Orders file [#100]. | 