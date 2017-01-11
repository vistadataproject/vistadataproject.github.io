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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILTER | LIST |  | true | List of name-value pairs defining the search. | 




 Generated on January 11th 2017, 7:15:04 am