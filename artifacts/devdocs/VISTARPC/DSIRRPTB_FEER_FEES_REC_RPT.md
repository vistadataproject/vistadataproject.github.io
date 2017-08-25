---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPTB FEER FEES REC RPT<br/>
# DSIRRPTB FEER FEES REC RPT

This schedules or runs the Fees Received Report.

## Properties

Property | Value
--- | ---
Label | FEER
MUMPS Implementation | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 15 | true | This is the earliest date for this report based on the billing date.
TODT | LITERAL | 15 | true | This is the latest date for this report based on the billing date.  If not specified, the current date is used.
DIVL | LITERAL | 200 | true | This can be one or more division numbers delimeted by &quot;^&quot;. I not provided,the default division for the person requesting the report is used.
SCHED | LITERAL | 1 | true | Boolean value to determine if the report is to be scheduled.  If notprovided a zero is assumed and the report will run immediately withoutgoing through the task manager.
ESTART | LITERAL | 15 | true | This is the earliest date and time to start running the report task ifscheduled.  If not specified, the current date/time will be used.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}