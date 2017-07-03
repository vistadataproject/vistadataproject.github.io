---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SDOE LIST ENCOUNTERS FOR VISIT
# SDOE LIST ENCOUNTERS FOR VISIT

This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified visit.

Property | Value
--- | ---
Label | LISTVST
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VISIT IEN | LITERAL |  | true | This is the internal entry number of an entry in theVISIT [#9000010 - ^AUPNVSIT] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}