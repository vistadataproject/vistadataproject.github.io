---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUS IAM ADD USER 

 property | value 
--- | --- 
 label | XUS IAM ADD USER
 tag | IAMAU
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | SINGLE VALUE
 description | This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to add a new user to the VistA NEW PERSON file (#200). The XUSPF200 Security Key is required to add a user without an SSN (file #200 special privileges).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NAME | LITERAL | 35 | true | NAME field (#.01) in the NEW PERSON file (#200) to match the SubjectID in the user's SAML Token. | 
| SECID | LITERAL | 30 | true | SECID field (#205.1) in the NEW PERSON file (#200) to match the SecID in the user's SAML Token. | 
| EMAIL | LITERAL | 50 | true | EMAIL field (#.151) in the NEW PERSON file (#200). | 
| ADUPN | LITERAL | 50 | true | Active Directory User Principal Name ADUPN field (#205.5) in the NEWPERSON file (#200) to match user's Active Directory UPN. | 
| SSN | LITERAL | 9 | true | SSN field (#9) in the NEW PERSON file (#200) to match the user's Social Security Number or Taxpayer Identification Number. While not required to provision a VistA user, not populating this field with a valid SSN couldprevent access to some applications and data in VistA. | 
| DOB | LITERAL | 20 | true | DOB field (#5) in the NEW PERSON file (#200) to match the user's Date of Birth. | 
| STATION | LITERAL | 20 | true | DIVISION field (#.01) of the DIVISION multiple (#16) in the NEW PERSON file (#200). The name of a Division that this user may sign on to. The Division should be an active treating facility. | 
| AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application. | 




 Generated on January 11th 2017, 7:15:04 am