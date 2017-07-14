---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORAM1 PCGOAL<br/>
# ORAM1 PCGOAL

Calculates percent in goal from filed INR entries for AnticoagulationManagement patients - can do either Stable or all patients (pass 1 as second parameter for stable).

## Properties

Property | Value
--- | ---
Label | PCGOAL
Routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | 
CMPLX | LITERAL |  |  | OPTIONAL,  IF MISSING, CLACULATES ON ALL VISITS; IF 1 ONLY CALCULATES ON NON-COMPLX VISITS



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}