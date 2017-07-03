---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPT3 RTR HOW RECEIVED RPT
# DSIRRPT3 RTR HOW RECEIVED RPT

This proceedure schedules or runs the Received Method Summary Report

Property | Value
--- | ---
Label | RTR
Routine | [DSIRRPT3](http://code.osehra.org/dox/Routine_DSIRRPT3_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 15 | true | This is the field tht identifies the eariest received date for the report.
TODT | LITERAL | 15 | true | This is the field tht identifies the latest received date for the report.
DIVL | LITERAL | 200 | true | This is an optional list of division numbers delimited with a ^.
SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the reportshould be scheduled.
ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}