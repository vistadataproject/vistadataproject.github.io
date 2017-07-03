---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPTR GETRPT GET RPT DATA
# DSIRRPTR GETRPT GET RPT DATA

Retrieves stored results from a specified report.

Property | Value
--- | ---
Label | GETRPT
Routine | [DSIRRPTR](http://code.osehra.org/dox/Routine_DSIRRPTR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | Internal entry number of the report in 19620.35
STFM | LITERAL | 99 | true | This is the Internal Number from the word processing multiple in file 19620.35 that was passed back as the last line sent in the small group return.
RECS | LITERAL | 6 | true | This is the max number of records from the report text to return.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}