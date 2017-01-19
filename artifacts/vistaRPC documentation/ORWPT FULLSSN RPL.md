---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT FULLSSN RPL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT FULLSSN RPL{:/}
 tag | {::nomarkdown}FSSNRPL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Given an SSN in the format 999999999(P), return a list of matching patients based on Restricted Patient List.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN in the format '999999999(P)'.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FSSNRPL^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return list matching Full SSN, but from RPL only.
 Input parameters | {::nomarkdown}ID{:/}
 Code | {::nomarkdown}  N ORRPL,ORCNT,ORPT,ORLPT,ORPIEN<br> S ORRPL=$G(^VA(200,DUZ,101))<br> S ORRPL=$P(ORRPL,U,2)<br> I (('ORRPL)!(ORRPL="")) S LST(0)="" Q<br> S (ORCNT,ORPT)=0<br> F  S ORPT=$O(^DPT("SSN",ID,ORPT)) Q:'ORPT  D<br> .S ORLPT=0<br> .F  S ORLPT=$O(^OR(100.21,ORRPL,10,ORLPT)) Q:'ORLPT  D<br> ..S ORPIEN=+$G(^OR(100.21,ORRPL,10,ORLPT,0))<br> ..I ((ORPIEN<0)!(ORPIEN="")) Q<br> ..I (ORPIEN'=ORPT) Q<br> ..S ORCNT=ORCNT+1<br> ..S LST(ORCNT)=ORPIEN_U_$P(^DPT(ORPIEN,0),U)_U_$$DOB^DPTLK1(ORPIEN,2)_U_$$SSN^DPTLK1(ORPIEN) ; DG249.{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}