---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRHCQ1 GETSPT<br/>
# ORRHCQ1 GETSPT

Gets sensitive patients from a query tool cohort, where the patientshave not yet been screened.

## Properties

Property | Value
--- | ---
Label | GETSPT
MUMPS Implementation | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Start | LITERAL | 80 | true | Starting position, specified by Name!DFN.  For example:Winchester, Charles Emmerson!78390
Length | LITERAL | 80 | true | Length of the return array from this routine.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}