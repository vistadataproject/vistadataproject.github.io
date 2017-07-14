---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB REPORT READMIT<br/>
# DVBAB REPORT READMIT

Generates a re-admission report, in either standard or delimited format, for the specified date range.

## Properties

Property | Value
--- | ---
Label | STRT
Routine | [DVBAB56](http://code.osehra.org/dox/Routine_DVBAB56_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report.
EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report.
DVBAH | LITERAL |  | true | Defines the scope of the report:  &#x27;H&#x27; indicates HOSPITAL  &#x27;D&#x27; indicates DOM
DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}