---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCMC ROLE 

 property | value 
--- | --- 
 label | SCMC ROLE
 tag | ROLE
 routine | [SCMCTSK2](http://code.osehra.org/dox/Routine_SCMCTSK2_source.html)
 return value type | ARRAY
 description | Determine boxes based on Role

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SCPATCH | LITERAL | 60 | true | PatchVersion ^ ClientVersion | 
| vs:Input_Parameter-8994_02 | ROLE | LITERAL |  | true | ROLE^TEAM POSITION | 