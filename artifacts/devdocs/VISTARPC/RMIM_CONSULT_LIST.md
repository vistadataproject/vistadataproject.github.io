---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; RMIM CONSULT LIST
# RMIM CONSULT LIST

Returns a list of consult requests for a patient within optional date rangeand optional service.

Property | Value
--- | ---
Label | CON
Routine | [RMIMV](http://code.osehra.org/dox/Routine_RMIMV_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient DFN from File #2 (Patient File.)
START DATE | LITERAL | 16 |  | Optional start date to begin the search.
STOP DATE | LITERAL | 16 |  | Optional stop date to end the search.
SERVICE | LITERAL | 16 |  | Optional consulting service from the Request Service file (#123.5).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}