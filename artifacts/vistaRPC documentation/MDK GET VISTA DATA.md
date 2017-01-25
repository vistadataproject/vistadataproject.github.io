---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MDK GET VISTA DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MDK GET VISTA DATA{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [MDKRPC1](http://code.osehra.org/dox/Routine_MDKRPC1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the routine tag that will be called to retrieve the data.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is whatever data is needed by the subroutine to process the request for data. In many cases it will be a single value (e.g., patient id - DFN).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}