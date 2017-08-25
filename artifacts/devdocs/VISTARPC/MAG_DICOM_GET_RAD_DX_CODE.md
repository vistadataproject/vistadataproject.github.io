---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET RAD DX CODE<br/>
# MAG DICOM GET RAD DX CODE

This RPC is used to lookup an entry in file DIAGNOSTIC CODES (78.3).

## Properties

Property | Value
--- | ---
Label | DXCODE
MUMPS Implementation | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DXCODE | LITERAL | 30 | true | This is the diagnostic name to be used in the lookup process.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}