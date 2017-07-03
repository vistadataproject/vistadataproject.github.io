---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS LAST5
# VPS LAST5

 Returns a list of patients matching LastNameInitial_Last4SSN based onRestricted Patient List.

Property | Value
--- | ---
Label | LAST5
Routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSID | LITERAL | 30 | true | String literal containing patient&#x27;s last name initial and last 4-digits ofthe SSN i.e., &quot;T9999&quot;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}