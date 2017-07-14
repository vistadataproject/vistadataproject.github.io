---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN PROS UTL REPORT<br/>
# SPN PROS UTL REPORT

Returns detailed information for delivered prosthetics items for a list of given patients (based on the ICN) based on a date range.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPP1](http://code.osehra.org/dox/Routine_SPNJRPP1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLIST | LIST |  |  | Patient&#x27;s ICN in string format (ICN^ICN^ICN^ICN...)
FDATE | LITERAL |  |  | Date to start collection from: (mm/dd/yyyy)
TDATE | LITERAL |  |  | Date to end collection: (mm/dd/yyyy)  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}