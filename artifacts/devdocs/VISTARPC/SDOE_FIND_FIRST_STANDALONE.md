---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SDOE FIND FIRST STANDALONE
# SDOE FIND FIRST STANDALONE

This Remote Procedure Call (RPC) returns the internal entrynumber of an OUTPATIENT ENCOUNTER file (#409.68) entry for thefirst the first standalone add/edit for a patient in a specified date range.Use same date for begin and end dates for specific (single) date check.Standalone encounter is an encounter with no parent and the originatingprocess is 'Stop Code Addition'.

Property | Value
--- | ---
Label | EXAE
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL |  | true | This is the internal entry number of an entry in the PATIENT [#2 - ^DPT] file.
BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional.
END DATE/TIME | LITERAL |  | true | Ending date and time in VA FileMan format.Time is optional.
SEARCH FLAGS | LITERAL |  | true | This parameter allows developers to set specific flags that areused as an API searches encounter records. The flags indicate howthe API should function. Character  Description ---------  -----------     C      Use only completed encounters



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}