---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RG PRIMARY VIEW FROM MPI<br/>
# RG PRIMARY VIEW FROM MPI

This remote procedure call will return the MPI Patient Data Inquiry [MPI DATA MGT PDAT MPI] (PDAT) report for a requested ICN.

## Properties

Property | Value
--- | ---
Label | MPIPV
Routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 16 | true | This is the Integration Control Number of the patient for whom data is requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}