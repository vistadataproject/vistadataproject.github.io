---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPT4 CDD DISCREPANCY RPT
# DSIRRPT4 CDD DISCREPANCY RPT

This RPC returns data from the DSIR STATUS HISTORY file to review whichrequest are being entered as closed on one day yet the status date is aprevious date.

Property | Value
--- | ---
Label | CDD
Routine | [DSIRRPT4](http://code.osehra.org/dox/Routine_DSIRRPT4_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | FileMan format start date where report will begin looking at stauses. Based on status date.
TODT | LITERAL | 7 | true | Last status date to look at for report.
CLRK | LIST | 99 | true | Array where each element is equal to the DUZ of selected clerks.Optional - no entries passed will return all clerks for time period.
SCHED | LITERAL | 1 | true | Boolean flag that determines whether a report is scheduled or runimmedieately. 0 - Immediate  1 - Schedule.
ESTART | LITERAL | 15 | true | Earliest time to start the scheduled task.  Mmust be inFileMan date/timeformat.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}