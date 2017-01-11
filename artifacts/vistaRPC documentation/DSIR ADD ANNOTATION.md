---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR ADD ANNOTATION 

 property | value 
--- | --- 
 label | DSIR ADD ANNOTATION
 tag | ADDANNO
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | SINGLE VALUE
 description | This RPC adds entries into file 19620.98 which is for internal annotations on patients pertinent to the ROI department.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL | 999 | true | This is the pointer to either the Patient File #2 or the DSIR Non-Computerized Patient file #19620.96. Example values:         2345;DPT(        23111;DSIR(19620.96, | 




Generated on January 11th 2017, 6:34:23 am