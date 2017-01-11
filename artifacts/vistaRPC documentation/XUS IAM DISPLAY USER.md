---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS IAM DISPLAY USER 

 property | value 
--- | --- 
 label | XUS IAM DISPLAY USER
 tag | IAMDU
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | ARRAY
 description | This restricted PRC is used exclusively by the Identity and Access Management (IAM) Provisioning application to display a VistA user. The XUSHOWSSN Security Key is required to display Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DISPDUZ | LITERAL | 20 | true | DUZ (IEN) of user to be displayed. | 
| AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application. | 