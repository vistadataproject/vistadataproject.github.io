---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR REPORT STYLESHEET
# ROR REPORT STYLESHEET

The ROR REPORT STYLESHEET remote procedure retrieves the XSL stylesheet associated with the report. If there is no stylesheet available, the default one is returned.

Property | Value
--- | ---
Label | GETXSL
Routine | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPTCODE | LITERAL |  | true | Code of the report (value of the CODE field of the report descriptor inthe ROR REPORT file).
TYPE | LITERAL |  |  | The TYPE parameter defines the type of requested stylesheet:   1  Report preview (default)  2  Comma-separated output  3  Printer output



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}