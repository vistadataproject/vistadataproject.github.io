---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPR GET PATIENT DATA JSON 

 property | value 
--- | --- 
 label | VPR GET PATIENT DATA JSON
 tag | GET
 routine | [VPRDJ](http://code.osehra.org/dox/Routine_VPRDJ_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC retrieves the requested data from VistA, and returns it in^TMP(\VPR\,$J,n) as JSON.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILTER | LIST |  | true | List of name-value pairs defining the search. | 