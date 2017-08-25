---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS IAM BIND USER<br/>
# XUS IAM BIND USER

This restricted RPC is used exclusively by the Identity and Access Management (IAM) Binding application to set the Security ID (SecID) in the VistA NEW PERSON file (#200) for Single Sign-On Internal (SSOi).

## Properties

Property | Value
--- | ---
Label | IAMBU
MUMPS Implementation | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SECID | LITERAL | 40 | true | Unique Security ID [SecID, assigned by Identity and Access Management]
AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Binding Application



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}