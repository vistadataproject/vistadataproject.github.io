---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS IAM FIND USER 

 property | value 
--- | --- 
 label | XUS IAM FIND USER
 tag | IAMFU
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | ARRAY
 description | This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to find a list of users that satisfy a collection of input criteria. One or more of the input array values must be set by the calling application. The XUSHOWSSN Security Key is required to do lookups using Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAME | LITERAL | 35 | true | Search on user name. | 
| SSN | LITERAL | 9 | true | Search on user Social Security Number (SSN). The user calling this RPCmust hold the XUSHOWSSN Security Key to search using SSN. | 
| DOB | LITERAL | 15 | true | Search on user Date of Birth (DOB). The user calling this RPC must hold the XUSHOWSSN Security Key to search using DOB. | 
| ADUPN | LITERAL | 50 | true | Search on user Active Directory UPN. | 
| SECID | LITERAL | 30 | true | Search on user Security ID. | 
| AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application. | 




Generated on January 11th 2017, 6:34:23 am