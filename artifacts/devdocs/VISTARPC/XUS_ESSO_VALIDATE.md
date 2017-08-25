---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS ESSO VALIDATE<br/>
# XUS ESSO VALIDATE

This API/RPC uses the VA Identity and Access Management (IAM) SAML tokendefinition version 1.2 attributes from a SAML token for user sign-on.

## Properties

Property | Value
--- | ---
Label | ESSO
MUMPS Implementation | [XUESSO3](http://code.osehra.org/dox/Routine_XUESSO3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DOC | LITERAL | 30 | true | Input:   DOC &#x3D; Closed reference to global root containing XML document                (loaded STS SAML Token). See $$EN^MXMLDOM instructions in               the VistA Kernel Developers Guide for required format of               the DOC global.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}