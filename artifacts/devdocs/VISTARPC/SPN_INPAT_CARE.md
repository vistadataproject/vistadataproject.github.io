---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN INPAT CARE<br/>
# SPN INPAT CARE

Returns detailed information for Applications for Inpatient Care for a list of given patients (list of ICNs) based on a date range. 

## Properties

Property | Value
--- | ---
Label | COL
MUMPS Implementation | [SPNJRPIC](http://code.osehra.org/dox/Routine_SPNJRPIC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICNLIST | LIST |  |  | Patient&#x27;s ICNs in string format (ICN^ICN^ICN^ICN^ICN...) 
FDATE | LITERAL |  |  | Date to start search from.  
TDATE | LITERAL |  |  | Date to end search at.  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}