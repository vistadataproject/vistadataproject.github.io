---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR REPORT STYLESHEET<br/>
# ROR REPORT STYLESHEET

The ROR REPORT STYLESHEET remote procedure retrieves the XSL stylesheet associated with the report. If there is no stylesheet available, the default one is returned.

## Properties

Property | Value
--- | ---
Label | GETXSL
Routine | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPTCODE | LITERAL |  | true | Code of the report (value of the CODE field of the report descriptor inthe ROR REPORT file).
TYPE | LITERAL |  |  | The TYPE parameter defines the type of requested stylesheet:   1  Report preview (default)  2  Comma-separated output  3  Printer output



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}