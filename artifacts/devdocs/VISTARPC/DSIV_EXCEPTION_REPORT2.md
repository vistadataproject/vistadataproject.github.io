---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV EXCEPTION REPORT2
# DSIV EXCEPTION REPORT2

Kicks off a background job to run the ICB Exception report (users who did not enter buffer entries in a timely manner).

Property | Value
--- | ---
Label | RPTP
Routine | [DSIVICR1](http://code.osehra.org/dox/Routine_DSIVICR1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDT | LITERAL | 30 | true | Contains the start date for the report.
EDT | LITERAL | 30 | true | Contains the end date of the report.
DSIVHNDL | LITERAL | 50 | true | Contains the handle for the background job.  This is the ^XTMP global node where the report status and data will reside.
DSIVLOCS | LIST | 30 | true | Contains a list of clinics to return for the report.  The exception report will still gather appointments for all locations (except inactive, and &quot;ZZ&quot; locations), but will only return the selected ones.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}