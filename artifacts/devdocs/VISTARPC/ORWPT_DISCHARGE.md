---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT DISCHARGE<br/>
# ORWPT DISCHARGE

Given a patient and an admission date, return the discharge date/time.

## Properties

Property | Value
--- | ---
Label | DISCHRG
MUMPS Implementation | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | The patient ien (i.e., DFN).
ADMITDT | LITERAL |  | true | Date the patient was admitted.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DISCHRG^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Get discharge movement information
Input Parameters | DFN, ADMITDT
Code | {::nomarkdown}<pre><code> N VAIP<br/> I +$G(ADMITDT)=0 S Y=DT Q<br/> S VAIP("D")=ADMITDT D 52^VADPT<br/> I +VAIP(17)=0 S Y=DT Q<br/> S Y=+VAIP(17,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}