---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE LIST ENCOUNTERS FOR PAT<br/>
# SDOE LIST ENCOUNTERS FOR PAT

This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified patient and specified date range.

## Properties

Property | Value
--- | ---
Label | LISTPAT
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional.
END DATE/TIME | LITERAL |  | true | End date and time in VA FileMan format.Time is optional.
PATIENT ID | LITERAL |  | true | This is the internal entry number of an entry in the PATIENT [#2 - ^DPT] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}