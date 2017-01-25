---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LAST5 RPL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LAST5 RPL{:/}
 tag | {::nomarkdown}LAST5RPL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients matching the string of Last Name Initial_Last 4 SSN (Initial/Last 4 look-up based on Restricted Patient List).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LAST5RPL^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Input parameters | {::nomarkdown}ID{:/}
 Code | {::nomarkdown}  N ORRPL,ORCNT,ORPT,ORPIEN<br> S ORRPL=$G(^VA(200,DUZ,101))<br> S ORRPL=$P(ORRPL,U,2)<br> I (('ORRPL)!(ORRPL="")) S LST(0)="" Q<br> S (ORCNT,ORPT)=0<br> F  S ORPT=$O(^OR(100.21,ORRPL,10,ORPT)) Q:'ORPT  D<br> .S ORPIEN=+$G(^OR(100.21,ORRPL,10,ORPT,0))<br> .I ((ORPIEN<0)!(ORPIEN="")) Q<br> .S ORCNT=ORCNT+1<br> .S LST(ORCNT)=ORPIEN_U_$P(^DPT(ORPIEN,0),U)_U_$$DOB^DPTLK1(ORPIEN,2)_U_$$SSN^DPTLK1(ORPIEN) ; DG249.{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}