---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE LIST ENCOUNTERS FOR VISIT<br/>
# SDOE LIST ENCOUNTERS FOR VISIT

This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified visit.

## Properties

Property | Value
--- | ---
Label | LISTVST
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VISIT IEN | LITERAL |  | true | This is the internal entry number of an entry in theVISIT [#9000010 - ^AUPNVSIT] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}