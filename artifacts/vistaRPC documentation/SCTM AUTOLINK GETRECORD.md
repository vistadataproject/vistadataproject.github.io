---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCTM AUTOLINK GETRECORD 

 property | value 
--- | --- 
 label | SCTM AUTOLINK GETRECORD
 tag | GETREC
 routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
 return value type | ARRAY
 description | This API returns the 0th node of the Team file(#404.51) entryand the list of current autolinks.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TEAM | LITERAL | 50 | true | Pointer to entry in Team file. | 