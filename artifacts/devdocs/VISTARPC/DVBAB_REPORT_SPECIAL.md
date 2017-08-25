---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB REPORT SPECIAL<br/>
# DVBAB REPORT SPECIAL

Generates a Special Report for Pension and A&A, in either standard or delimited format, for the specified parameters.

## Properties

Property | Value
--- | ---
Label | SPECRPT
MUMPS Implementation | [DVBASPD2](http://code.osehra.org/dox/Routine_DVBASPD2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DCTYPES | LIST |  | true | List of IENs that are the &quot;Discharge Types&quot;that if found, will be included in the report
BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report.
EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report.
RONUM | LITERAL |  | true | Regional Office number should be passed if youwish to consider only one specific Regional Officein the report.
REP | LITERAL | 1 | true | Pass &#x27;A&#x27; for an A&amp;A ReportPass &#x27;P&#x27; for a Pension Report
DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}