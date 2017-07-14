---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPTB AMTB AMOUNT BILLED<br/>
# DSIRRPTB AMTB AMOUNT BILLED

This schedules or runs the Amount Billed Report.

## Properties

Property | Value
--- | ---
Label | AMTB
Routine | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 15 | true | This is the earliest date for this report based on the billing date.
TODT | LITERAL | 15 | true | This is the latest date for this report based on the billing date.  Ifnot specified, the current date is used.
DIVL | LITERAL | 200 | true | This can be one or more division numbers delimeted by &quot;^&quot;. I not provided,the default division for the person requesting the report is used.
SCHED | LITERAL | 1 | true | Boolean value to determine if the report is to be scheduled.  If notprovided a zero is assumed and the report will run immediately withoutgoing through the task manager.
ESTART | LITERAL | 15 | true | This is the earliest date and time to start running the report task ifscheduled.  If not specified, the current date/time will be used.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}