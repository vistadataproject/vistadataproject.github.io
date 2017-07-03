---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM GET RAD DX CODE
# MAG DICOM GET RAD DX CODE

This RPC is used to lookup an entry in file DIAGNOSTIC CODES (78.3).

Property | Value
--- | ---
Label | DXCODE
Routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DXCODE | LITERAL | 30 | true | This is the diagnostic name to be used in the lookup process.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}