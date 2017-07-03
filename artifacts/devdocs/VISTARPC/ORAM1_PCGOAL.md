---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORAM1 PCGOAL
# ORAM1 PCGOAL

Calculates percent in goal from filed INR entries for AnticoagulationManagement patients - can do either Stable or all patients (pass 1 as second parameter for stable).

Property | Value
--- | ---
Label | PCGOAL
Routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | 
CMPLX | LITERAL |  |  | OPTIONAL,  IF MISSING, CLACULATES ON ALL VISITS; IF 1 ONLY CALCULATES ON NON-COMPLX VISITS



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}