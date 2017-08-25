---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN OUTPATIENT ICNS<br/>
# SPN OUTPATIENT ICNS

Returns list of ICNs of all outpatient visits during a given date range and clinic list.

## Properties

Property | Value
--- | ---
Label | COL
MUMPS Implementation | [SPNJRPOP](http://code.osehra.org/dox/Routine_SPNJRPOP_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FDATE | LITERAL |  |  | Date to begin Outpatients search
TDATE | LITERAL |  |  | Date to end Outpatients search
CLINLST | LIST |  |  | List of Outpatient clinic stops 
ICNLST | LIST |  |  | List of ICNs to search from



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}