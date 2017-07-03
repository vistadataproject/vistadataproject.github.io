---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPXMODIFIER
# EC GETPXMODIFIER

Returns CPT modifier entries for a CPT Procedure based on procedure date.

Property | Value
--- | ---
Label | ECPXMOD
Routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrows.  1. ECCPT - CPT code ien (file #81)  2. ECDT  - Procedure date and time (fileman format)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}