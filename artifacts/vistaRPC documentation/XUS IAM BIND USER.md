---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS IAM BIND USER 

 property | value 
--- | --- 
 label | XUS IAM BIND USER
 tag | IAMBU
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | SINGLE VALUE
 description | This restricted RPC is used exclusively by the Identity and Access Management (IAM) Binding application to set the Security ID (SecID) in the VistA NEW PERSON file (#200) for Single Sign-On Internal (SSOi).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SECID | LITERAL | 40 | true | Unique Security ID [SecID, assigned by Identity and Access Management] | 
| AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Binding Application | 




 Generated on January 11th 2017, 7:15:04 am