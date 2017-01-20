---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETPXLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETPXLST{:/}
 tag | {::nomarkdown}PXFND{:/}
 routine | [ECUMRPC2](http://code.osehra.org/dox/Routine_ECUMRPC2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Performs a search on a procedure string and returns an array list of matchesfrom file #81 and/or #725.User can type     1.  \A.search string\ to search file 81.    2.  \B.search string\ to search file 725.    3.  \search string\ to search both files.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Procedure search string.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}