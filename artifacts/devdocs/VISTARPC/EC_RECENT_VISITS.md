---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC RECENT VISITS
# EC RECENT VISITS

Returns the 20 most recent visits/appointments for a selected patientfor the selected location.

Property | Value
--- | ---
Label | RCNTVST
Routine | [ECUTL1](http://code.osehra.org/dox/Routine_ECUTL1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  |  | ECARY will be sent with two delimited pieces of information.     DFN    - patient&#x27;s IEN    LOC    - (optional) IEN of the location to filter visits/appts



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}