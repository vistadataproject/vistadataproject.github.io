---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB REPORT DISCHARGE<br/>
# DVBAB REPORT DISCHARGE

Generates a discharge report, in either standard or delimited format, for the specified parameters.

## Properties

Property | Value
--- | ---
Label | STRT
MUMPS Implementation | [DVBAB53](http://code.osehra.org/dox/Routine_DVBAB53_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report.
EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report.
ADTYPE | LITERAL |  | true | Valid discharge code values:  &#x27;A&#x27; - Recieving A&amp;A  &#x27;P&#x27; - Pension  &#x27;S&#x27; - Service Connected  &#x27;L&#x27; - All discharge types
DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}