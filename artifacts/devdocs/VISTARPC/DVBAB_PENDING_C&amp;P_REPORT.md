---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB PENDING C&amp;P REPORT<br/>
# DVBAB PENDING C&amp;P REPORT

Generates a report containing the pending C&P exam requests.

## Properties

Property | Value
--- | ---
Label | STRT
MUMPS Implementation | [DVBAB6](http://code.osehra.org/dox/Routine_DVBAB6_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBCSORT | LITERAL |  |  | 
RSTAT | LITERAL |  |  | 
ERDAYS | LITERAL |  |  | 
OLDAYS | LITERAL |  |  | 
ADIVNUM | LITERAL |  |  | 
ELTYP | LITERAL |  |  | 
DVBADLMTR | LITERAL |  | true | This parameter is used to indicate whether the report will create a plain text format or a comma delimited output format. DVBADLMTR&#x3D;0 means report will be in plain text and DVBADLMTR&#x3D;1 means create output in comma delimited format.
ROFILTER | LITERAL |  | true | The value of ROFILTER indicates which Regional Office the Pending C&amp;P Report is for. This parameter is only passed when the Pending C&amp;P Report is being run from the Consolidated Remote Reports menu.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}