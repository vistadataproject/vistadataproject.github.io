---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPTF FOIA YEAR END REPORT
# DSIRRPTF FOIA YEAR END REPORT

This RPC will collect the data for the year end FOIA report for VA Form0712

Property | Value
--- | ---
Label | FOIA
Routine | [DSIRRPTF](http://code.osehra.org/dox/Routine_DSIRRPTF_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | The FileMan Format date to start the report.  Typically this will beOctober 1st of the previous year.
TODT | LITERAL | 7 | true | This is the end date for the report period.  Typically this will beSeptember 30th of the current year.
DIV | LITERAL | 20 | true | This is the list of internal division for the current user or another division that the current user has access to.
QUICK | LITERAL | 1 | true | 0 - Calculate the report and save the results if report for a fiscal year1 - Return the stored results of the report for a fiscal year2 - Return the combined stored results and user add ins for a fiscal year
SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the reportshould be scheduled.
ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}