---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDX1 STCHANGE<br/>
# ORWDX1 STCHANGE



## Properties

Property | Value
--- | ---
Label | STCHANGE
MUMPS Implementation | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | 
ORYARR | LIST |  |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [STCHANGE^ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
Input Parameters | DFN, ORYARR
Code | {::nomarkdown}<pre><code> N CNT,DONE,NODE,PHARMID,STR,STATUS<br/> S ORY=0,DONE=0<br/> I '$$PATCH^XPDUTL("PSS*1.0*93") Q<br/> S CNT=0 F  S CNT=$O(ORYARR(CNT)) Q:CNT'>0!(DONE>0)  D<br/> . S NODE=$G(ORYARR(CNT))<br/> . S PHARMID=$P(NODE,U),STATUS=$P(NODE,U,2)<br/> . I $$UP^XLFSTR(STATUS)'=$$STATUS^PSSORUTE(DFN,PHARMID) S ORY=1,DONE=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}