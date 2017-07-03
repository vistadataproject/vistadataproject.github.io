---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRHCQ1 GETSLN
# ORRHCQ1 GETSLN

When a query executes, the sensitive patients are saved off before theyare evaluated, along with the sensitive information gathered fromthe routine PTSEC^DGSEC4.  This RPC returns the sensitive message textfor the given patient when this query attempted to query their record.

Property | Value
--- | ---
Label | GETSLN
Routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 80 | true | DFN of the sensitive patient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}