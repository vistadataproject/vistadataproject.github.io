---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPRODEFS 

 property | value 
--- | --- 
 label | EC GETPRODEFS
 tag | PRDEFS
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | SINGLE VALUE
 description | This broker entry point returns the defaults for procedure data entry.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Input value, ECARY, contains the following values separated by \^\     ECL  - Location IEN     ECD  - DSS Unit IEN     ECC  - Category IEN     ECP  - Procedure IEN | 