---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPT4 EXP EXPEDITED REPORT<br/>
# DSIRRPT4 EXP EXPEDITED REPORT

This procedure schedules or runs the Expedited Processing Report.

## Properties

Property | Value
--- | ---
Label | EXP
MUMPS Implementation | [DSIRRPT4](http://code.osehra.org/dox/Routine_DSIRRPT4_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 15 | true | This is the field tht identifies the eariest received date for the report.
TODT | LITERAL | 15 | true | This is the field tht identifies the latest received date for the report.
DIV | LITERAL | 12 | true | This is an optional division number.  If not provided, DUZ(2) is used.
SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the report should be scheduled.
ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}