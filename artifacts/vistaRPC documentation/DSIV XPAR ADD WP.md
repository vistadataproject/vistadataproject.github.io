---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPAR ADD WP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR ADD WP{:/}
 tag | {::nomarkdown}ADDWP{:/}
 routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will allow the addition of a new Word-processing type systemparameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA - required - p1~p2~p3  p1 := optional - entity - if not passed, defaults to SYS for current                            user.   p2 := required - parameter name  p3 := optional - instance (defaults to 1){:/} | 
| {::nomarkdown}ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of text to add to the parameter where:  ARRAY(0) = 1st line of text  ARRAY(1) = 2nd line of text  ARRAY(n) = nth line of text   ARRAY(n)=\\ to store blank lines of text, such as paragraph separation.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}