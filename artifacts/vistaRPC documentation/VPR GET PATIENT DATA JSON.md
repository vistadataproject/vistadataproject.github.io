---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPR GET PATIENT DATA JSON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPR GET PATIENT DATA JSON{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VPRDJ](http://code.osehra.org/dox/Routine_VPRDJ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC retrieves the requested data from VistA, and returns it in^TMP(\VPR\,$J,n) as JSON.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILTER{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}List of name-value pairs defining the search.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}