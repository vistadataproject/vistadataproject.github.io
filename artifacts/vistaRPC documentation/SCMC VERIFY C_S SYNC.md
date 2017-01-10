---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCMC VERIFY C_S SYNC 

 property | value 
--- | --- 
 label | SCMC VERIFY C_S SYNC
 tag | VERPAT
 routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
 return value type | SINGLE VALUE
 description | Successful result enables PCMM client to operate with PCMM server andreturns the value to use for RPCTimeLimit.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SCPATCH | LITERAL | 60 | true | PatchVersion ^ ClientVersion | 