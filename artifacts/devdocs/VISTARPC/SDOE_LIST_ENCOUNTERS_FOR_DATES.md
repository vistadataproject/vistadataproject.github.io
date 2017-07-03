---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SDOE LIST ENCOUNTERS FOR DATES
# SDOE LIST ENCOUNTERS FOR DATES

This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified date range.

Property | Value
--- | ---
Label | LIST
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional.
END DATE/TIME | LITERAL |  | true | End date and time in VA FileMan format.Time is optional.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}