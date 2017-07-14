---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT ID INFO<br/>
# ORWPT ID INFO

Returns identifying information for a patient.

## Properties

Property | Value
--- | ---
Label | IDINFO
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [IDINFO^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return identifying information for a patient
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> PID^DOB^SEX^VET^SC%^WARD^RM-BED^NAME</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X0,X1,X101,X3,XV  ; name/dob/sex/ssn, ward, room-bed, sc%, vet<br/> S X0=$G(^DPT(DFN,0)),X1=$G(^(.1)),X101=$G(^(.101)),X3=$G(^(.3)),XV=$G(^("VET"))<br/> S REC=$$SSN^DPTLK1(DFN)_U_$$DOB^DPTLK1(DFN,2)_U_$P(X0,U,2)_U_$P(XV,U)_U_$P(X3,U,2)_U_$P(X1,U)_U_$P(X101,U)_U_$P(X0,U) ;DG249</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}