---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORVW FACLIST 

 property | value 
--- | --- 
 label | ORVW FACLIST
 tag | FACLIST
 routine | [ORVW](http://code.osehra.org/dox/Routine_ORVW_source.html)
 return value type | ARRAY
 description | Wrapper for the TFL^VAFCTFU1 routine, which returns all the treatingfacilities for a given patient DFN.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Patient DFN | 