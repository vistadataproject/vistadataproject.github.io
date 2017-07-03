---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX1 PATWARD
# ORWDX1 PATWARD



Property | Value
--- | ---
Label | PATWARD
Routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [PATWARD^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N TEMP<br/> S ORY=""<br/> I $G(^DPT(DFN,.1))="" Q<br/> S TEMP=^DPT(DFN,.1)<br/> S ORY=TEMP_U_+$G(^DIC(42,+$O(^DIC(42,"B",TEMP,0)),44))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fClinicWardMeds.pas">fClinicWardMeds.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPrintLocation.pas">fPrintLocation.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}