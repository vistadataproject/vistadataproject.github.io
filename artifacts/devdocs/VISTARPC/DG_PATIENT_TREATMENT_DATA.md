---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DG PATIENT TREATMENT DATA<br/>
# DG PATIENT TREATMENT DATA

This RPC will return data from the Patient Treatment (#45) file. Input:  PTFNUMBR - The Patient Treatment IFN (.001 of the #45 file record)   RESULTS - Results array (passed by reference)     Output:     RESULTS - Results array (passed by reference) with the following               nodes.   RESULTS(0) - 1 (entry found) OR -1 (error)  RESULTS(1) - Type of Disposition (#72)^Place of Disposition (#75)^               Principal Diagnosis (#79)^Coding System Version (pointer to              ICD Coding Systems #80.4 file)  RESULTS(2) - DX 2^DX 3^...^DX 24 (Secondary Diagnosis 2 through Secondary              Diagnosis 24)  RESULTS(3) - POA 1^POA 2^...^POA 25 (Present on Admission indicators for              Principal Diagnosis and Secondary Diagnosis 2 through               Secondary Diagnosis 24) 

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [DGPTFAPI](http://code.osehra.org/dox/Routine_DGPTFAPI_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTFNUMBER | LITERAL |  | true | The Patient Treatment IFN (.001 of the #45 file record) 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}