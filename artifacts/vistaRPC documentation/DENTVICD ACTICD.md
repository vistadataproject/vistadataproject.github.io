---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTVICD ACTICD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTVICD ACTICD{:/}
 tag | {::nomarkdown}ACTICD{:/}
 routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Verify that an ICD code is active as of a certain date{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VICD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN or .01 field value from the DIAGNOSIS file (#80 - ^ICD9){:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date will be sued to check if the code was active as of that date. Default is today.{:/} | 
| {::nomarkdown}FUN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag will allow for the RPC to be used as an intrensic function. This value is not needed for GUI calls.{:/} | 
| {::nomarkdown}SYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ICD coding system you wish to use. 1  = ICD-9 Diagnosis2  = ICD-9 Procedure30 = ICD-10 Diagnosis (Default)31 = ICD-10 Procedure{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}