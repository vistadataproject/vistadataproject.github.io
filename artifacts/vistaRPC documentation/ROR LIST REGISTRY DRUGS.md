---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST REGISTRY DRUGS 

 property | value 
--- | --- 
 label | ROR LIST REGISTRY DRUGS
 tag | RORGEN
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LIST REGISTRY DRUGS RPC returns a list of drugs from file 799.5based on input of a beginning NAME value

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PART | LITERAL | 30 | true | The partial match restriction | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 1 | true | 1 equals HEPC Registry 2 equals HIV Registry | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL | 10 | true | DEPRECATED | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL | 10 | true | DEPRECATED | 