---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR ADD DOCUMENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR ADD DOCUMENT{:/}
 tag | {::nomarkdown}NEWITEM{:/}
 routine | [DSIROI0](http://code.osehra.org/dox/Routine_DSIROI0_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to create an entry in file 19620.1 DSIR RELEASED DOCUMENT{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA ARRAY{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Input: Array of    (1): Pointer to VEJD ROI INSTANCE (19620) file    (2): Internal Set of Codes value for document type    (3): Document IEN (If applicable)    (4): Internal Set of Codes value for document media    (5): Caption    (6): Document length    (7): Date/time of document    (8): Creator of Document: Needs to be a pointer to the NEW PERSON file    (9): Include in Billing (0 - No, 1 - Yes)   (10): Hospital Location{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}