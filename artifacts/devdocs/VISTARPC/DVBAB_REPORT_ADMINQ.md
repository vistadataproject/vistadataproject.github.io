---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB REPORT ADMINQ<br/>
# DVBAB REPORT ADMINQ

Generates an admission inquiry report, in either standard or delimited format, for the specified parameters.

## Properties

Property | Value
--- | ---
Label | ENBROKE2
MUMPS Implementation | [DVBAADRP](http://code.osehra.org/dox/Routine_DVBAADRP_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BDATE | LITERAL |  | true | Beginning date in a date range to use for retrieving results for the report.
EDATE | LITERAL |  | true | Ending date in a date range to use for retrieving results for the report.
ROYESNO | LITERAL |  |  | &#x27;Y&#x27; indicates to screen by RONUM.Note: In the M code, the variable is referenced as RO vs ROYESNO.
RONUM | LITERAL |  |  | Screens RO number on report. Regional Office Station # when ROYESNO is &#x27;Y&#x27;, otherwise 0.
DVBADLMTR | LITERAL |  | true | This is an optional parameter, which when defined with the final end date selected in the GUI, will produce a delimited report. If this parameter is undefined, null or 0 then the standard report format will be generated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}