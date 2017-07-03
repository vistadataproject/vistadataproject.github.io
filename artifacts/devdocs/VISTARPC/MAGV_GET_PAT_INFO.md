---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET PAT INFO
# MAGV GET PAT INFO

This RPC returns information for VA patients given an internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6).

Property | Value
--- | ---
Label | GETPATI
Routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATREFIEN | LITERAL | 10 | true | This is the internal entry number of the patient reference on the IMAGING PATIENT REFERENCE File (#2005.6).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}