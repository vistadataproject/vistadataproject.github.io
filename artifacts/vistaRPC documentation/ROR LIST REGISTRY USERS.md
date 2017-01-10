---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST REGISTRY USERS 

 property | value 
--- | --- 
 label | ROR LIST REGISTRY USERS
 tag | USERLIST
 routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR GET REGISTRY USERS remote procedure returns the list of registry users (VistA users who have the appropriate security keys).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 