---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU MED GET PATIENT DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU MED GET PATIENT DATA{:/}
 tag | {::nomarkdown}GETPATDT{:/}
 routine | [TIUMED1](http://code.osehra.org/dox/Routine_TIUMED1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns patient data.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient IEN.{:/} | 
| {::nomarkdown}TIUSEC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This BOOLEAN value allows sensitive patient data to be displayed or hidden.{:/} | 
| {::nomarkdown}TIUGHS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This BOOLEAN value determines whether or not HEALTH SUMMARY information will included after the patient data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}