---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETPATCH 

 property | value 
--- | --- 
 label | EC GETPATCH
 tag | PATCH
 routine | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
 return value type | SINGLE VALUE
 description | Broker call checks to see if a patch has been installed. Returns 1 ifpatch is installed.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Input a patch number, ex. EC*2.0*28. | 