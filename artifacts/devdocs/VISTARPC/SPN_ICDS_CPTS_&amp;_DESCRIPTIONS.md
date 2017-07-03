---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN ICDS CPTS &amp; DESCRIPTIONS
# SPN ICDS CPTS &amp; DESCRIPTIONS

Returns ICD/CPT Codes and Descriptions for a given patient based on the ICN and a cutoff date. 

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPCX](http://code.osehra.org/dox/Routine_SPNJRPCX_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL |  |  | Individual Patient&#x27;s ICN 
SPNCUTDT | LITERAL |  |  | Date to start search from.  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}