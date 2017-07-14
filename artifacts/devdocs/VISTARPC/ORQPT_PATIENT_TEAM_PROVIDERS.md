---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQPT PATIENT TEAM PROVIDERS<br/>
# ORQPT PATIENT TEAM PROVIDERS

Function returns a list of providers linked to a patient via teams.

## Properties

Property | Value
--- | ---
Label | TPTPR
Routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 16 | true | Patient identifier from patient file [#2].



## MUMPS Method Description

Property | Value
--- | ---
Method | [TPTPR^ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
Method Comment | return list of providers linked to a patient via teams
Input Parameters | PT
Code | {::nomarkdown}<pre><code> I +$G(PT)<1 S ORY(1)="^No patient identified" Q<br/> N ORTM,PROV,SEQ<br/> S ORTM=""<br/> F  S ORTM=$O(^OR(100.21,"AB",+PT_";DPT(",ORTM)) Q:+$G(ORTM)<1  D<br/> .S SEQ=0 F  S SEQ=$O(^OR(100.21,+ORTM,1,SEQ)) Q:SEQ<1  D<br/> ..S PROV=^OR(100.21,+ORTM,1,SEQ,0) I $L(PROV) D<br/> ...S ORY(+PROV)=+PROV_U_$P(^VA(200,+PROV,0),U)<br/> S:'$D(ORY) ORY(1)="^No providers found."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}