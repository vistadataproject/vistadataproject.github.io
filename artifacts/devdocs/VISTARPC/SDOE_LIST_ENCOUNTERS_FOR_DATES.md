---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE LIST ENCOUNTERS FOR DATES<br/>
# SDOE LIST ENCOUNTERS FOR DATES

This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified date range.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional.
END DATE/TIME | LITERAL |  | true | End date and time in VA FileMan format.Time is optional.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}