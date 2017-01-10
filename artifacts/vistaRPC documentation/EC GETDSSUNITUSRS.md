---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETDSSUNITUSRS 

 property | value 
--- | --- 
 label | EC GETDSSUNITUSRS
 tag | ECUSR
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an array of users with access to a particular DSS unit.  User access to a DSS unit is determined from file #200.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL | 30 | true | DSS unit IEN must be passed in as input parameter. | 