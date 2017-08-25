---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB REPORT PENDING7131<br/>
# DVBAB REPORT PENDING7131

Generates a list of pending 7131 requests.

## Properties

Property | Value
--- | ---
Label | STRT
MUMPS Implementation | [DVBAB57](http://code.osehra.org/dox/Routine_DVBAB57_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SELDIV | LITERAL |  | true | 
DIV | LITERAL |  | true | 
DVBADLMTR | LITERAL | 1 | true | This parameter is used to indicate whether the report will create a plain text format or a comma delimited output format. DVBADLMTR&#x3D;0 means report will be in plain text and DVBADLMTR&#x3D;1 means create output in comma delimited format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}