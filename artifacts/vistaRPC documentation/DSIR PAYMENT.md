---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR PAYMENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR PAYMENT{:/}
 tag | {::nomarkdown}PAYMENT{:/}
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to record payments on ROI bills{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BILN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Bill Number to file 19620.2{:/} | 
| {::nomarkdown}AMNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Payment amount - Numeric dollar value or 'W' to indicate fee is to be Waived{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}