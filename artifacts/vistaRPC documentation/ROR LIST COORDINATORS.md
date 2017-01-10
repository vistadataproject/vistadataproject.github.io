---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST COORDINATORS 

 property | value 
--- | --- 
 label | ROR LIST COORDINATORS
 tag | RCLIST
 routine | [RORRP023](http://code.osehra.org/dox/Routine_RORRP023_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST COORDINATORS remote procedure returns a list of registry coordinators. The list is retrieved from the COORDINATOR multiple (14) ofthe ROR REGISTRY PARAMETERS file (#798.1).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1). | 