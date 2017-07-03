---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPATCH
# EC GETPATCH

Broker call checks to see if a patch has been installed. Returns 1 ifpatch is installed.

Property | Value
--- | ---
Label | PATCH
Routine | [ECUURPC](http://code.osehra.org/dox/Routine_ECUURPC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input a patch number, ex. EC*2.0*28.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}