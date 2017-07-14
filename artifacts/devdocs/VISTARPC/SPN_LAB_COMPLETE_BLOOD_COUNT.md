---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN LAB COMPLETE BLOOD COUNT<br/>
# SPN LAB COMPLETE BLOOD COUNT

This RPC supports the following report(s):         Report Page Name                Subscreen        Urinary Tract Infection         Complete Blood Count  Notes:  Calling the line tag COL will generate all Lab Complete Blood Count testson file for the patient from the cut off date forward. DFN = Internal Entry Number of patient in the PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut off date to present  Tested at the Bay Pines FO account using DFN = 100005251 and CUTDATE=1-1-1900.  Of course, at other sites, DFN would vary.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNRPCC](http://code.osehra.org/dox/Routine_SPNRPCC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL |  | true | 
CUTDATE | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}