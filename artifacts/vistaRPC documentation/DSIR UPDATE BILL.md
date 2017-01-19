---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR UPDATE BILL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR UPDATE BILL{:/}
 tag | {::nomarkdown}UPDBILL{:/}
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to create and edit the ROI Bill entries.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REQN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Request pointer to file 19620{:/} | 
| {::nomarkdown}BILN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file 19620.2 (Optional)If null new entry in 19620.2 will be created{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of data for the fields in file 19620.2 (Required)Format of Array:        Field Number ^ Internal Data Value          .01^12345        .02^3030911{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}