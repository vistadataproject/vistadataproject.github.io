---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB WITNESS<br/>
# PSB WITNESS

Used by frmWintess to validate if a Witness at the client is authorized to be a witness for a BCMA action, i.e. High Risk Drug administration. Validation is achieved via not allowing the logged in person to witness for themselves, also persons that hold certain keys can't be a valid witness.

## Properties

Property | Value
--- | ---
Label | WITNESS
Routine | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBACC | LITERAL |  | true | Access Code
PSBVER | LITERAL |  | true | Verify Code.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}