---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN READMISSIONS REPORT<br/>
# SPN READMISSIONS REPORT

Returns detailed information for SCI/SCD ADMISSIONS and DISCHARGES for a list of given patients (based on the ICN) based on a date range, so that numbers of Readmissions can be determined.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPRE](http://code.osehra.org/dox/Routine_SPNJRPRE_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLIST | LIST |  |  | Patient&#x27;s ICN in string format (ICN^ICN^ICN^ICN...)
FDATE | LITERAL |  |  | Date to start search from.  
TDATE | LITERAL |  |  | Date to end search at.  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}