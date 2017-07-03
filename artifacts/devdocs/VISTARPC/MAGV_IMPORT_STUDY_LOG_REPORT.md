---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV IMPORT STUDY LOG REPORT
# MAGV IMPORT STUDY LOG REPORT

Exports data from the MAGV IMPORT STUDY LOG file (#2006.9421) as formatted reports.

Property | Value
--- | ---
Label | IMPLOGEX
Routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REPORT | LITERAL |  | true | An index value for the report to be exported.
STARTDT | LITERAL | 8 | true | The date, as YYYYMMDD, from which to start the query. If null, defaults to date of the earliest record.
STOPDT | LITERAL | 8 | true | The date, as YYYYMMDD, bracketing the end of the query. If null, defaults to TODAY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}