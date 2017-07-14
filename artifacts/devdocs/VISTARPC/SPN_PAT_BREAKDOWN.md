---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN PAT BREAKDOWN<br/>
# SPN PAT BREAKDOWN

Returns breakdown of patient statistics for a list of given patients (based on the ICN) based on a date range, if provided.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPC5](http://code.osehra.org/dox/Routine_SPNJRPC5_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLIST | LIST |  |  | Patient&#x27;s ICN in string format (ICN^ICN^ICN^ICN) 
FDATE | LITERAL |  |  | (Optional) Date to start search from.  
TDATE | LITERAL |  |  | (Optional) Date to end search at.  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}