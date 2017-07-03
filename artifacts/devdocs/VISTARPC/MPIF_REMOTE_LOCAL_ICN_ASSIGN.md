---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MPIF REMOTE LOCAL ICN ASSIGN
# MPIF REMOTE LOCAL ICN ASSIGN

This RPC is to support assignment of local ICNs to the next X number of patients that don't have an ICN already and aren't a merged record (-9 node).

Property | Value
--- | ---
Label | LOCALIA
Routine | [MPIFFULL](http://code.osehra.org/dox/Routine_MPIFFULL_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOWM | LITERAL | 32 | true | Number of patients to get a local ICN assigned



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}