---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETUSRDSSUNIT
# EC GETUSRDSSUNIT

Returns an array of DSS units for which the user has access.

Property | Value
--- | ---
Label | USRUNT
Routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The input variable ECARY contains a value from the location or New Person file.   1. ECL   - Location IEN, #4(if define gives User&#x27;s DSS units for a location)   2. ECDUZ - New Person IEN, #200 (if define gives list of DSS Units available              to user)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}