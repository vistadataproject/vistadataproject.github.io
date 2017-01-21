---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPAR GET WP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR GET WP{:/}
 tag | {::nomarkdown}GETWP{:/}
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return text for a word processing type parameter for an entityand instance.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3 p1 := optional - entity - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}