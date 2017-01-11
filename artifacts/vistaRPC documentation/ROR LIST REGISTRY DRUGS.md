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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PART | LITERAL | 30 | true | The partial match restriction | 
| FLAGS | LITERAL | 1 | true | 1 equals HEPC Registry 2 equals HIV Registry | 
| NUMBER | LITERAL | 10 | true | DEPRECATED | 
| FROM | LITERAL | 10 | true | DEPRECATED | 