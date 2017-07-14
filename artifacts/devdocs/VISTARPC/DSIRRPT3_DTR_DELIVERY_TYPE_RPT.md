---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPT3 DTR DELIVERY TYPE RPT<br/>
# DSIRRPT3 DTR DELIVERY TYPE RPT

This proceedure schedules or runs the Delivery Type Summary Report,

## Properties

Property | Value
--- | ---
Label | DTR
Routine | [DSIRRPT3](http://code.osehra.org/dox/Routine_DSIRRPT3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 15 | true | This is the field tht identifies the eariest received date for the report.
TODT | LITERAL | 15 | true | This is the field tht identifies the latest received date for the report.
DIVL | LITERAL | 200 | true | This is an optional list of division numbers delimited with a ^.
SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the report should be scheduled. 
ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}