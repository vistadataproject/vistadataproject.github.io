---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS IAM EDIT USER 

 property | value 
--- | --- 
 label | XUS IAM EDIT USER
 tag | IAMEU
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | SINGLE VALUE
 description | This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to edit an existing user in the VistA NEW PERSON file (#200). The XUSHOWSSN Security Key is required to edit Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB). The XUSPF200 Security Key is required to edit a user without an SSN (file #200 special privileges).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INARRY | LIST | 240 | true | The IAM RSD is unclear what the input data is or how it will be formatted. | 
| AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application. | 




 Generated on January 11th 2017, 7:15:04 am