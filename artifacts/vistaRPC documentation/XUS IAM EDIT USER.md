---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS IAM EDIT USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS IAM EDIT USER{:/}
 tag | {::nomarkdown}IAMEU{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to edit an existing user in the VistA NEW PERSON file (#200). The XUSHOWSSN Security Key is required to edit Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB). The XUSPF200 Security Key is required to edit a user without an SSN (file #200 special privileges).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INARRY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}240{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IAM RSD is unclear what the input data is or how it will be formatted.{:/} | 
| {::nomarkdown}AUTHCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Security Phrase for IAM Provisioning Application.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}