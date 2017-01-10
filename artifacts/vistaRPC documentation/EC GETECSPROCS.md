---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETECSPROCS 

 property | value 
--- | --- 
 label | EC GETECSPROCS
 tag | PROC
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an array of procedures for an Event Code screen (file #720.3). Eventcode screens are based on location, DSS unit and Category.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrow.  1.  ECL  - Location IEN  2.  ECD  - DSS Unit IEN  3.  ECC  - Category IEN | 