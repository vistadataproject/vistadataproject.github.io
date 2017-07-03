---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG PAT BS5 CHECK
# MAGG PAT BS5 CHECK

This RPC calls the GUIBS5A^DPTLK6 API.  To return a list of Patients ifany match the Last Name and Last 4 SSN of the input DFN.It is the Similiar Patient Check.

Property | Value
--- | ---
Label | BS5CHK
Routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of Patient to check.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}