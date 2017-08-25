---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB REPORT ADMISSIONS<br/>
# DVBAB REPORT ADMISSIONS

Generates an admission report, in either standard or delimited format,for the specified date range.

## Properties

Property | Value
--- | ---
Label | STRT
MUMPS Implementation | [DVBAB54](http://code.osehra.org/dox/Routine_DVBAB54_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report.
EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report.
DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}