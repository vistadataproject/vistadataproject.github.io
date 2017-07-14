---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN PHARMACY UTL REPORT<br/>
# SPN PHARMACY UTL REPORT



## Properties

Property | Value
--- | ---
Label | RPC
Routine | [SPNLRL7](http://code.osehra.org/dox/Routine_SPNLRL7_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FDATE | LITERAL |  |  | Date to start from.  mm/dd/yyyy.
COST | LITERAL |  |  | Value must be either ACTUAL OR CURRENT.
MINCOST | LITERAL |  |  | Minimum dollar cost of dispensed fills to display:  (0-9999999)
MINFILL | LITERAL |  |  | Minimum number of fills to display:  (1-999999)
PTLIST | LIST |  |  | ICN^ICN^ICN
TDATE | LITERAL |  |  | Date to end collection.  mm/dd/yyyy.
HIUSERS | LITERAL |  |  | Number of highest users to identify:  (0-100)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}