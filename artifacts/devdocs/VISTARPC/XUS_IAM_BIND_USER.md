---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS IAM BIND USER
# XUS IAM BIND USER

This restricted RPC is used exclusively by the Identity and Access Management (IAM) Binding application to set the Security ID (SecID) in the VistA NEW PERSON file (#200) for Single Sign-On Internal (SSOi).

Property | Value
--- | ---
Label | IAMBU
Routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SECID | LITERAL | 40 | true | Unique Security ID [SecID, assigned by Identity and Access Management]
AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Binding Application



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}