---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN INPAT OUTPAT ACTIVITY
# SPN INPAT OUTPAT ACTIVITY

Returns inpatient/outpatient activity statistics for a list of given patients (based on the ICN) based on a date range, minimum number of results, and number of highest patients to identify. 

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPC3](http://code.osehra.org/dox/Routine_SPNJRPC3_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLST | LIST |  |  | Patient&#x27;s ICN in string format (ICN^ICN^ICN^ICN ) 
FDATE | LITERAL |  |  | Date to start search from.  
TDATE | LITERAL |  |  | Date to end search at.  
HIUSERS | LITERAL |  |  | Number of patients with highest amount of orders to identify. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}