---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN ICD9 CODE SEARCH
# SPN ICD9 CODE SEARCH

Returns a patient's ICD9 Code history for a list of given patients (based on the ICN), date range, and a list of ICD codes desired to be searched.

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPC9](http://code.osehra.org/dox/Routine_SPNJRPC9_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLST | LIST |  |  | Patient&#x27;s ICNs in list format (ICN^ICN^ICN^ICN^ICN...)
FDATE | LITERAL |  |  | The admission starting date
TDATE | LITERAL |  |  | The Admission ending date
PATTYP | LITERAL |  |  | (1) Patients in SCI Registry only (2) All Patients
SPNANS | LITERAL |  |  | (1) Range of Codes (2) Individual codes
CODES | LIST |  |  | The list or range of ICD codes



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}