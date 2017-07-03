---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN MEDICATIONS ICNS
# SPN MEDICATIONS ICNS

Returns list of ICNs of all patients prescribed a specific VA Drug Class during a given date range.

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPDC](http://code.osehra.org/dox/Routine_SPNJRPDC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FDATE | LITERAL |  |  | Date to begin Medications search
TDATE | LITERAL |  |  | Date to end Medications search
VADC | LITERAL |  |  | VA Drug Class list (array format)
ICNLST | LITERAL |  |  | List of ICNs to search from



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}