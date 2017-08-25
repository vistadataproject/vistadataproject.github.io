---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS2 ADMIN<br/>
# ORWDPS2 ADMIN



## Properties

Property | Value
--- | ---
Label | ADMIN
MUMPS Implementation | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ADMIN^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Method Comment | return administration time info
Input Parameters | DFN, SCH, OI, LOC, ADMIN
First Comment | {::nomarkdown}<pre><code> REC: StartText^StartTime^Duration^FirstAdmin</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br/> S LOC=+$G(^SC(LOC,42)),REC=""<br/> I $L($G(^DPT(DFN,.1))) S REC=$$FIRST^ORCDPS3(DFN,LOC,OI,SCH,"",$G(ADMIN))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}