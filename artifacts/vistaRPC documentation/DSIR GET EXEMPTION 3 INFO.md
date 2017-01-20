---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR GET EXEMPTION 3 INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR GET EXEMPTION 3 INFO{:/}
 tag | {::nomarkdown}GETEXMT{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This returns the values from fields 13.01 thru 13.1. 13.01 - 13.04 are Y/N values indicated by 1 or 0.13.05 - 13.1 are free text upto 20 characters each.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal pointer to file 19620.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}