---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS IAM BIND USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS IAM BIND USER{:/}
 tag | {::nomarkdown}IAMBU{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This restricted RPC is used exclusively by the Identity and Access Management (IAM) Binding application to set the Security ID (SecID) in the VistA NEW PERSON file (#200) for Single Sign-On Internal (SSOi).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SECID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Unique Security ID [SecID, assigned by Identity and Access Management]{:/} | 
| {::nomarkdown}AUTHCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Security Phrase for IAM Binding Application{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:06 am</p>{:/}