---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN INPAT OUTPAT SPECIFIC
# SPN INPAT OUTPAT SPECIFIC

Returns inpatient/outpatient activity information for a list of given patients (based on the ICN) based on a date range, minimum number of results, a list of Clinic names/numbers and Specialty names.  There are two types of returns for this RPC depending on the HIUSERS parameter that is passed, a '0' will return clinic & specialty stats only and a '1' will return patient usage data as well. 

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPC4](http://code.osehra.org/dox/Routine_SPNJRPC4_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLST | LIST |  |  | Patient&#x27;s ICN in string format (ICN^ICN^ICN^ICN) 
FDATE | LITERAL |  |  | Date to start search from.  
TDATE | LITERAL |  |  | Date to end search at.  
CLINSTP | LIST |  |  | List of Clinic Stops to search for.
SPECLTY | LIST |  |  | Type of Specialties to search for. 
HIUSERS | LITERAL |  |  | Type of data to return: 0 - clinic &amp; specialty stats, 1 - patient usage data. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}