---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT CWAD<br/>
# ORWPT CWAD

Returns the CWAD flag(s) for a patient.

## Properties

Property | Value
--- | ---
Label | CWAD
MUMPS Implementation | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 16 |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [CWAD^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | returns CWAD flags for a patient
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S Y=$$CWAD^ORQPT2(DFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}