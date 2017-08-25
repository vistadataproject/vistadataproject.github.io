---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RMIM CONSULT LIST<br/>
# RMIM CONSULT LIST

Returns a list of consult requests for a patient within optional date rangeand optional service.

## Properties

Property | Value
--- | ---
Label | CON
MUMPS Implementation | [RMIMV](http://code.osehra.org/dox/Routine_RMIMV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient DFN from File #2 (Patient File.)
START DATE | LITERAL | 16 |  | Optional start date to begin the search.
STOP DATE | LITERAL | 16 |  | Optional stop date to end the search.
SERVICE | LITERAL | 16 |  | Optional consulting service from the Request Service file (#123.5).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}