---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN OUTPATIENT ICNS
# SPN OUTPATIENT ICNS

Returns list of ICNs of all outpatient visits during a given date range and clinic list.

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPOP](http://code.osehra.org/dox/Routine_SPNJRPOP_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FDATE | LITERAL |  |  | Date to begin Outpatients search
TDATE | LITERAL |  |  | Date to end Outpatients search
CLINLST | LIST |  |  | List of Outpatient clinic stops 
ICNLST | LIST |  |  | List of ICNs to search from



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}