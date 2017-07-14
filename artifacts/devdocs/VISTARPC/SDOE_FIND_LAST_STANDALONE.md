---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE FIND LAST STANDALONE<br/>
# SDOE FIND LAST STANDALONE

This Remote Procedure Call (RPC) returns the internal entrynumber of an OUTPATIENT ENCOUNTER file (#409.68) entry for thelast standalone add/edit for a patient in a specified date range.Standalone encounter is an encounter with no parent and theoriginating process is 'Stop Code Addition'.

## Properties

Property | Value
--- | ---
Label | GETLAST
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL |  | true | This is the internal entry number of an entry in the PATIENT [#2 - ^DPT] file.
BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional.
SEARCH FLAGS | LITERAL |  | true | This parameter allows developers to set specific flags that areused as an API searches encounter records. The flags indicate howthe API should function. Character  Description ---------  -----------     C      Use only completed encounters



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}