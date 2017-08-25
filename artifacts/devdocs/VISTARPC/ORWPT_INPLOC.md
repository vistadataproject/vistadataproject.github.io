---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT INPLOC<br/>
# ORWPT INPLOC

Returns the patient's current location if an inpatient.

## Properties

Property | Value
--- | ---
Label | INPLOC
MUMPS Implementation | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [INPLOC^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return a patient&#x27;s current location
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N X<br/> S X=$G(^DPT(DFN,.102)),REC=0<br/> I X S X=$P($G(^DGPM(X,0)),U,6)<br/> I X S REC=+$G(^DIC(42,X,44))<br/> I X S $P(REC,U,2)=$P($G(^DIC(42,X,0)),U,1)<br/> I X S X=$P($G(^DIC(42,X,0)),U,3)<br/> S $P(REC,U,3)=X</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}