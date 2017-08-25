---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS1 SCHALL<br/>
# ORWDPS1 SCHALL



## Properties

Property | Value
--- | ---
Label | SCHALL
MUMPS Implementation | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Patient DFN
LOCIEN | LITERAL |  | true | This is the inpatient location IEN from file 44, if a location is not defined for the patient the value will be zero.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SCHALL^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return all schedules
Input Parameters | DFN, LOCIEN
Code | {::nomarkdown}<pre><code> N CNT,ILST,ORARRAY,WIEN<br/> S WIEN=$$WARDIEN^ORWDPS32(+$G(LOCIEN))<br/> D SCHED^PSS51P1(WIEN,.ORARRAY)<br/> S ILST=0<br/> S CNT=0 F  S CNT=$O(ORARRAY(CNT)) Q:CNT'>0  D<br/> .S ILST=ILST+1,LST(ILST)=$P(ORARRAY(CNT),U,2,5)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}