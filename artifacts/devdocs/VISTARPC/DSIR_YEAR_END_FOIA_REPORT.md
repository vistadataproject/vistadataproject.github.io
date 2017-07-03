---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR YEAR END FOIA REPORT
# DSIR YEAR END FOIA REPORT

This RPC will collect the data for the year end FOIA report for VA Form0712.

Property | Value
--- | ---
Label | FOIA
Routine | [DSIROIR0](http://code.osehra.org/dox/Routine_DSIROIR0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 7 | true | The FileMan Format date to start the report.  Typically this will be October 1st of the previous year.
END DATE | LITERAL | 7 | true | This is the end date for the report period.  Typically this will be September 30th of the current year.
DIV | LITERAL | 99 | true | This is the list of internal division for the current user.multidivisional processing.
QUICK | LITERAL | 1 | true | 0 - Calculate the report and save the results if report for a fiscal year1 - Return the stored results of the report for a fiscal year2 - Return the combined stored results and user add ins for a fiscal year



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}