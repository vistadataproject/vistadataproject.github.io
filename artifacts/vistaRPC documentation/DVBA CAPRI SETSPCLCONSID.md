---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBA CAPRI SETSPCLCONSID 

 property | value 
--- | --- 
 label | DVBA CAPRI SETSPCLCONSID
 tag | SETSC
 routine | [DVBACPR1](http://code.osehra.org/dox/Routine_DVBACPR1_source.html)
 return value type | SINGLE VALUE
 description | This RPC sets the passed-in special considerations and links them to the passed-in 2507 request.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | 2507 REQUEST IEN | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | SPECIAL CONSIDERATION LIST | LIST |  | true |  | 