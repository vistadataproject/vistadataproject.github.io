---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XHD GET PARAMETER DEFINITIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XHD GET PARAMETER DEFINITIONS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [XHDPDEF](http://code.osehra.org/dox/Routine_XHDPDEF_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Gets parameter definitions as a list with IEN^NAME^DISPLAY NAME^ENTITYLISTin each node of the return array. This call returns a local array of SIZE elements in DIR direction from the initial Definition FROM.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the definition from which the list should begin (i.e., inclusive bound).{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}OPTIONAL parameter. This is the DIRECTION from the origin in which the definitions will be retrieved. Pass \+1\ to indicate ascending order, or \-1\ to indicate descending order).  DEFAULT: \+1\ or ascending order.{:/} | 
| {::nomarkdown}SIZE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of definitions that should be returned with each invocation of the call. DEFAULT: 44.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}