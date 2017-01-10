---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETVERSION 

 property | value 
--- | --- 
 label | EC GETVERSION
 tag | VERSRV
 routine | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
 return value type | SINGLE VALUE
 description | Returns the server version of a particular option.  This is used by ECS GUI to determine the current server version of the software.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | ECARY contains the option name and client version of the software. | 