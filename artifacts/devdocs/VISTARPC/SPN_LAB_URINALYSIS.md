---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN LAB URINALYSIS<br/>
# SPN LAB URINALYSIS

This RPC supports the following report(s):       Report Page Name              Subscreen      Urinary Tract Infections      Urinalysis  Notes:  Calling the line tag COL will generate all Lab Urinalysis testson file for the patient from the cut off date forward. DFN = Internal Entry Number of patient in the PATIENT file (#2)CUTDATE = Cut off date. Results are inclusive from cut off date to present  Tested at the Bay Pines FO account using DFN = 27 andCUTDATE=1-1-1990.  Of course, at other sites, DFN would vary.

## Properties

Property | Value
--- | ---
Label | COL
MUMPS Implementation | [SPNRPCD](http://code.osehra.org/dox/Routine_SPNRPCD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL |  | true | Internal entry number of the patient in the PATIENT file (#2).
CUTDATE | LITERAL |  | true | Data from the CUTDATE forward to the present date will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}