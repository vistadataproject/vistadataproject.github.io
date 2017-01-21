---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS IAM ADD USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS IAM ADD USER{:/}
 tag | {::nomarkdown}IAMAU{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to add a new user to the VistA NEW PERSON file (#200). The XUSPF200 Security Key is required to add a user without an SSN (file #200 special privileges).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}NAME field (#.01) in the NEW PERSON file (#200) to match the SubjectID in the user's SAML Token.{:/} | 
| {::nomarkdown}SECID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SECID field (#205.1) in the NEW PERSON file (#200) to match the SecID in the user's SAML Token.{:/} | 
| {::nomarkdown}EMAIL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}EMAIL field (#.151) in the NEW PERSON file (#200).{:/} | 
| {::nomarkdown}ADUPN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Active Directory User Principal Name ADUPN field (#205.5) in the NEWPERSON file (#200) to match user's Active Directory UPN.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN field (#9) in the NEW PERSON file (#200) to match the user's Social Security Number or Taxpayer Identification Number. While not required to provision a VistA user, not populating this field with a valid SSN couldprevent access to some applications and data in VistA.{:/} | 
| {::nomarkdown}DOB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DOB field (#5) in the NEW PERSON file (#200) to match the user's Date of Birth.{:/} | 
| {::nomarkdown}STATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DIVISION field (#.01) of the DIVISION multiple (#16) in the NEW PERSON file (#200). The name of a Division that this user may sign on to. The Division should be an active treating facility.{:/} | 
| {::nomarkdown}AUTHCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Security Phrase for IAM Provisioning Application.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}