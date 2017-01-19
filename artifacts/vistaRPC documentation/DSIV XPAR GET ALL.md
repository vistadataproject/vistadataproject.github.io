---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPAR GET ALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR GET ALL{:/}
 tag | {::nomarkdown}GETALL{:/}
 routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This will return all entities for a given parameter and instance{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3~~~p6  p1 := optional - screen results to specific entity type                 - i.e. SYS or USR; or USR.`<DUZ>  p2 := required - parameter name  p3 := optional - instance  p6 := optional - format code - default=Q, anything else besides Q or                   <null> will be treated as code B{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:35 am</p>{:/}