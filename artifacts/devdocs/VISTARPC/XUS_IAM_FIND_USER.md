---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS IAM FIND USER
# XUS IAM FIND USER

This restricted RPC is used exclusively by the Identity and Access Management (IAM) Provisioning application to find a list of users that satisfy a collection of input criteria. One or more of the input array values must be set by the calling application. The XUSHOWSSN Security Key is required to do lookups using Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB).

Property | Value
--- | ---
Label | IAMFU
Routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 35 | true | Search on user name.
SSN | LITERAL | 9 | true | Search on user Social Security Number (SSN). The user calling this RPCmust hold the XUSHOWSSN Security Key to search using SSN.
DOB | LITERAL | 15 | true | Search on user Date of Birth (DOB). The user calling this RPC must hold the XUSHOWSSN Security Key to search using DOB.
ADUPN | LITERAL | 50 | true | Search on user Active Directory UPN.
SECID | LITERAL | 30 | true | Search on user Security ID.
AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}