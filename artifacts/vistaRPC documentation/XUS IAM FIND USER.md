---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; XUS IAM FIND USER 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS IAM FIND USER{:/}
 tag | {::nomarkdown}IAMFU{:/}
 routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to find a list of users that satisfy a collection of input criteria. One or more of the input array values must be set by the calling application. The XUSHOWSSN Security Key is required to do lookups using Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Search on user name.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Search on user Social Security Number (SSN). The user calling this RPCmust hold the XUSHOWSSN Security Key to search using SSN.{:/} | 
| {::nomarkdown}DOB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Search on user Date of Birth (DOB). The user calling this RPC must hold the XUSHOWSSN Security Key to search using DOB.{:/} | 
| {::nomarkdown}ADUPN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Search on user Active Directory UPN.{:/} | 
| {::nomarkdown}SECID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Search on user Security ID.{:/} | 
| {::nomarkdown}AUTHCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Security Phrase for IAM Provisioning Application.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}