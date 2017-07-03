---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPTB FEEO FEES OUT RPT
# DSIRRPTB FEEO FEES OUT RPT

This schedules or runs the Fees Outstanding Report.

Property | Value
--- | ---
Label | FEEO
Routine | [DSIRRPTB](http://code.osehra.org/dox/Routine_DSIRRPTB_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIVL | LITERAL | 200 | true | This can be one or more division numbers delimeted by &quot;^&quot;. I not provided,the default division for the person requesting the report is used.
SCHED | LITERAL | 1 | true | Boolean value to determine if the report is to be scheduled.  If not provided a zero is assumed and the report will run immediately without going through the task manager.
ESTART | LITERAL | 15 | true | This is the earliest date and time to start running the report task if scheduled.  If not specified, the current date/time will be used. 
FRDT | LITERAL | 7 | true | Defines the low end of the billing dates to include in the report. 
TODT | LITERAL | 7 | true | Defines the high end of the billing dates to include in the report.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}