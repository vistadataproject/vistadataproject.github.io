---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB EXAMS BY DATE<br/>
# DVBAB EXAMS BY DATE

Provides a report by date range of all AMIE/CAPRI exam requests.

## Properties

Property | Value
--- | ---
Label | EXAMBYDT
MUMPS Implementation | [DVBABEBD](http://code.osehra.org/dox/Routine_DVBABEBD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEGDT | LITERAL |  | true | 
ENDDT | LITERAL |  | true | 
DVBADLMTR | LITERAL | 1 | true | The delimiter indicates whether the report should be produced in a comma delimited format (.csv file) or not. DVBADLMTR&#x3D;0 means report displays inplain text. DVBADLMTR&#x3D;1 means report will be created as a .csv fileimportable to Excel.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}