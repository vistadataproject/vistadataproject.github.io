---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCMC PCMM CHECK FTEE 

 property | value 
--- | --- 
 label | SCMC PCMM CHECK FTEE
 tag | FTEECHK
 routine | [SCMCTSK1](http://code.osehra.org/dox/Routine_SCMCTSK1_source.html)
 return value type | SINGLE VALUE
 description | Determine if provider has exceeded 1.0 FTEE

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SCPATCH | LITERAL | 60 | true | PatchVersion ^ ClientVersion | 
| vs:Input_Parameter-8994_02 | TPIEN | LITERAL |  | true | POSITION ASSIGNMENT HISTORY IEN ^ FTEE VALUE | 