---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWGN MAXFRQ 

 property | value 
--- | --- 
 label | ORWGN MAXFRQ
 tag | MAXFRQ
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | SINGLE VALUE
 description | This RPC checks if the frequency of an ICD-10 search term is than the maximum allowed ICD-10 return values.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORTRM | LITERAL | 99 | true | This is the search term to be looked up. | 