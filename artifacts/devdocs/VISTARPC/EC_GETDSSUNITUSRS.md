---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETDSSUNITUSRS
# EC GETDSSUNITUSRS

Returns an array of users with access to a particular DSS unit.  User access to a DSS unit is determined from file #200.

Property | Value
--- | ---
Label | ECUSR
Routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL | 30 | true | DSS unit IEN must be passed in as input parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}