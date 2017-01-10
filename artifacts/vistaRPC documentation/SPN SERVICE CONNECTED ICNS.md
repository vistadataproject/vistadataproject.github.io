---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN SERVICE CONNECTED ICNS 

 property | value 
--- | --- 
 label | SPN SERVICE CONNECTED ICNS
 tag | COL
 routine | [SPNJRPSC](http://code.osehra.org/dox/Routine_SPNJRPSC_source.html)
 return value type | GLOBAL ARRAY
 description |    Returns list of ICNs of all patients with a service connection percentage within the range given.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BPER | LITERAL |  |  | Beginning or low range percentage of service connection | 
| vs:Input_Parameter-8994_02 | EPER | LITERAL |  |  | Ending or high range percentage of service connection | 