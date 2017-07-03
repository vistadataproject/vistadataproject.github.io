---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN PROS UTL SPECIFIC
# SPN PROS UTL SPECIFIC

Returns detailed information for delivered prosthetics items for a list of given patients (based on the ICN) based on a date range, and prosthetic item list.

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPP2](http://code.osehra.org/dox/Routine_SPNJRPP2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLIST | LIST |  |  | Patient&#x27;s ICN in string format (ICN^ICN^ICN^ICN...)
FDATE | LITERAL |  |  | Date to start search from.  
TDATE | LITERAL |  |  | Date to end search at.  
ITEMS | LIST |  |  | Array that has the prosthetic item names



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}