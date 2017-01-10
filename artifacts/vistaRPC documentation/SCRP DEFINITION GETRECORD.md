---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SCRP DEFINITION GETRECORD 

 property | value 
--- | --- 
 label | SCRP DEFINITION GETRECORD
 tag | GETREC
 routine | [SCRPBK](http://code.osehra.org/dox/Routine_SCRPBK_source.html)
 return value type | ARRAY
 description | This RPC returns a scheduling report definition as definedin file 404.92.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REPORT ENTRY | LITERAL | 20 | true | Internal entry number of the report definition from file 404.92. | 