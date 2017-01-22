---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR ADD ANNOTATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR ADD ANNOTATION{:/}
 tag | {::nomarkdown}ADDANNO{:/}
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC adds entries into file 19620.98 which is for internal annotations on patients pertinent to the ROI department.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to either the Patient File #2 or the DSIR Non-Computerized Patient file #19620.96. Example values:         2345;DPT(        23111;DSIR(19620.96,{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}