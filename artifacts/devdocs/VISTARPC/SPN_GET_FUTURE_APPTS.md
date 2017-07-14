---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN GET FUTURE APPTS<br/>
# SPN GET FUTURE APPTS

Returns a listing of patients with appointment informationif they are scheduled for an appointment during the requested date range.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPC2](http://code.osehra.org/dox/Routine_SPNJRPC2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLST | LIST |  |  | A list of Integration Control Numbers of patients in the PATIENT file (#2)in the following format: (ICN^ICN^ICN^ICN^ICN...)
SPNSEL | LITERAL |  |  | Specifies which patients to search through:                1 - Patients from SCI registry only (ICNLST)                2 - VistA patients with SCD indicator only                3 - Both 1 &amp; 2
SPNSTRT | LITERAL |  |  | Starting date range.
SPNEND | LITERAL |  |  | Ending date range.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}