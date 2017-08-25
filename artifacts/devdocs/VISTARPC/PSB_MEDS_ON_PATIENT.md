---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB MEDS ON PATIENT<br/>
# PSB MEDS ON PATIENT

This RPC returns indicators if medications are still on a patient.  The patient's DFN will be passed in and a RESULTS array returned with three flags set.  Flags set to 1 for meds are on patient or 0 none per thiscategory.

## Properties

Property | Value
--- | ---
Label | MEDSONPT
MUMPS Implementation | [PSBRPC1](http://code.osehra.org/dox/Routine_PSBRPC1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient DFN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}