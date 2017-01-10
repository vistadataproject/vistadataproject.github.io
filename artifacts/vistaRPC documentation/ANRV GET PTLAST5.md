---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV GET PTLAST5 

 property | value 
--- | --- 
 label | ANRV GET PTLAST5
 tag | LAST5
 routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
 return value type | ARRAY
 description | Returns a list of patients using the last 5 format for inquiry e.g. Z9999.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RESULTS | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | PTID | LITERAL | 6 | true |  | 