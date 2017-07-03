---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT FULLSSN RPL
# ORWPT FULLSSN RPL

Given an SSN in the format 999999999(P), return a list of matching patients based on Restricted Patient List.

Property | Value
--- | ---
Label | FSSNRPL
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 15 | true | SSN in the format &#x27;999999999(P)&#x27;.



### MUMPS Method Description

Property | Value
--- | ---
Method | [FSSNRPL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return list matching Full SSN, but from RPL only.
Input Parameters | ID
Code | {::nomarkdown}<pre><code> N ORRPL,ORCNT,ORPT,ORLPT,ORPIEN<br/> S ORRPL=$G(^VA(200,DUZ,101))<br/> S ORRPL=$P(ORRPL,U,2)<br/> I (('ORRPL)!(ORRPL="")) S LST(0)="" Q<br/> S (ORCNT,ORPT)=0<br/> F  S ORPT=$O(^DPT("SSN",ID,ORPT)) Q:'ORPT  D<br/> .S ORLPT=0<br/> .F  S ORLPT=$O(^OR(100.21,ORRPL,10,ORLPT)) Q:'ORLPT  D<br/> ..S ORPIEN=+$G(^OR(100.21,ORRPL,10,ORLPT,0))<br/> ..I ((ORPIEN<0)!(ORPIEN="")) Q<br/> ..I (ORPIEN'=ORPT) Q<br/> ..S ORCNT=ORCNT+1<br/> ..S LST(ORCNT)=ORPIEN_U_$P(^DPT(ORPIEN,0),U)_U_$$DOB^DPTLK1(ORPIEN,2)_U_$$SSN^DPTLK1(ORPIEN) ; DG249.</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}