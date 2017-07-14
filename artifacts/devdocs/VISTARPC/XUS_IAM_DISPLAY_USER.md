---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS IAM DISPLAY USER<br/>
# XUS IAM DISPLAY USER

This restricted PRC is used exclusively by the Identity and Access Management (IAM) Provisioning application to display a VistA user. The XUSHOWSSN Security Key is required to display Personally Identifiable Information (PII) such as Social Security Number (SSN) or Date of Birth (DOB).

## Properties

Property | Value
--- | ---
Label | IAMDU
Routine | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DISPDUZ | LITERAL | 20 | true | DUZ (IEN) of user to be displayed.
AUTHCODE | LITERAL | 80 | true | Security Phrase for IAM Provisioning Application.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}