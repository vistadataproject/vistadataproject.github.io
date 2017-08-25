---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRHCQ1 GETSLN<br/>
# ORRHCQ1 GETSLN

When a query executes, the sensitive patients are saved off before theyare evaluated, along with the sensitive information gathered fromthe routine PTSEC^DGSEC4.  This RPC returns the sensitive message textfor the given patient when this query attempted to query their record.

## Properties

Property | Value
--- | ---
Label | GETSLN
MUMPS Implementation | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 80 | true | DFN of the sensitive patient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}