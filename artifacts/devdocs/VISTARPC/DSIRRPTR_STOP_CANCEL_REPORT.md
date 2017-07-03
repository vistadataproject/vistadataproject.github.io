---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRRPTR STOP CANCEL REPORT
# DSIRRPTR STOP CANCEL REPORT

Requests a specified task to stop running. No guarantee that this will always work, however, if a report is asked to stop while running and the report sees the request, the report will clean up the ^XTMP data, stop running and update the DSIR SCHEDULED REPORTS file.

Property | Value
--- | ---
Label | STOP
Routine | [DSIRRPTR](http://code.osehra.org/dox/Routine_DSIRRPTR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | Internal entry number of the report to delete in file 19620.35
WEP | LITERAL | 1 | true | This is a flag to delete the report with extreme prejudice. 0 &#x3D; No, 1 &#x3D; Yes, Defaults to 0.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}