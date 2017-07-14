---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN MEDICATIONS ICNS<br/>
# SPN MEDICATIONS ICNS

Returns list of ICNs of all patients prescribed a specific VA Drug Class during a given date range.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNJRPDC](http://code.osehra.org/dox/Routine_SPNJRPDC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FDATE | LITERAL |  |  | Date to begin Medications search
TDATE | LITERAL |  |  | Date to end Medications search
VADC | LITERAL |  |  | VA Drug Class list (array format)
ICNLST | LITERAL |  |  | List of ICNs to search from



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}