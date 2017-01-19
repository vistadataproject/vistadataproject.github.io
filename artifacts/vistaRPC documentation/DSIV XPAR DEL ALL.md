---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPAR DEL ALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR DEL ALL{:/}
 tag | {::nomarkdown}DELALL{:/}
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is used to delete the value for all instances of a parameter for agiven entity{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}