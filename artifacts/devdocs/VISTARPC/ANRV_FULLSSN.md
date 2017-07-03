---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ANRV FULLSSN
# ANRV FULLSSN

Given an SSN in the format 999999999(P), return a list of matching patients.patients.

Property | Value
--- | ---
Label | FULLSSN
Routine | [ANRVOA](http://code.osehra.org/dox/Routine_ANRVOA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 15 | true | SSN in the format 999999999(P)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}