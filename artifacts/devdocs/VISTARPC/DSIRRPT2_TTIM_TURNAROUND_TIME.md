---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPT2 TTIM TURNAROUND TIME
# DSIRRPT2 TTIM TURNAROUND TIME

RPC for scheduling the Turnaround Time Report.

Property | Value
--- | ---
Label | TAT
Routine | [DSIRRPT2](http://code.osehra.org/dox/Routine_DSIRRPT2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | This is the lower date range for the report based on date received. 
TODT | LITERAL | 7 | true | This is the upper date range for the report based on date received.
DIVL | LITERAL | 240 | true | This is a list of division numbers delimited with a ^.
SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run           1 &#x3D; Schedule / 0 or Null &#x3D; Run Immediately
ESTART | LITERAL | 15 | true | Earliet time to start the scheaduled task



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}