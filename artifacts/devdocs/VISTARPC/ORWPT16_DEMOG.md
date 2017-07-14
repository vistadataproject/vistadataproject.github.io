---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT16 DEMOG<br/>
# ORWPT16 DEMOG



## Properties

Property | Value
--- | ---
Label | DEMOG
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEMOG^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | procedure
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> Return common patient demographic info<br/> NAME^SEX^DOB^SSN^WARDID^WARDNAME^RMBED^ADMITTIME^DIED ;^SC%^ELIGTYPE</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S X=^DPT(DFN,0),VAL=$P(X,U,1,3)_U_$P(X,U,9)_U_U_$G(^(.1))_U_$G(^(.101))<br/> S X=$P(VAL,U,6) I $L(X) S $P(VAL,U,5)=$O(^SC("B",X,0))<br/> S X=$G(^DPT(DFN,.105)) I X S $P(VAL,U,8)=$P(^DGPM(X,0),U,1)<br/> I $L($P($G(^DPT(DFN,.35)),U,1)) S $P(VAL,U,9)=$P(^(.35),U,1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}