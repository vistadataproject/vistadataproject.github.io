---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS IAM DISPLAY USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS IAM DISPLAY USER{:/}
 tag | {::nomarkdown}IAMDU{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This restricted PRC is used exclusively by the Identity and Access Management (IAM) Provisioning application to display a VistA user. The XUSHOWSSN Security Key is required to display Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DISPDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ (IEN) of user to be displayed.{:/} | 
| {::nomarkdown}AUTHCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Security Phrase for IAM Provisioning Application.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}