---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DGBT CLAIM DEDUCTIBLE PAID<br/>
# DGBT CLAIM DEDUCTIBLE PAID

THIS RPC IS USED BY BENEFICIARY TRAVEL PACKAGE TO RETRIEVE TRAVEL CLAIM INFORMATION ABOUT ANY TRAVEL CLAIMS FOR PATIENT.

## Properties

Property | Value
--- | ---
Label | RPC
MUMPS Implementation | [DGBTRDV](http://code.osehra.org/dox/Routine_DGBTRDV_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ICN | LITERAL | 30 | true | PATIENTS ICN NUMBER FROM ^DPT(DFN).
CLAIM DATE | LITERAL | 15 | true | BENEFICIARY TRAVEL CLAIM DATE (NOT THE CURRENT DATE).
DGBTRET | REFERENCE |  | true | THE ARRAY THE DATA WILL BE RETURNED IN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}