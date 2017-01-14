---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT LAST5 RPL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LAST5 RPL{:/}
 tag | {::nomarkdown}LAST5RPL{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patients matching the string of Last Name Initial_Last 4 SSN (Initial/Last 4 look-up based on Restricted Patient List).{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LAST5RPL^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Input parameters | {::nomarkdown}ID{:/}
 Code | ```  N ORRPL,ORCNT,ORPT,ORPIEN
 S ORRPL=$G(^VA(200,DUZ,101))
 S ORRPL=$P(ORRPL,U,2)
 I (('ORRPL)!(ORRPL="")) S LST(0)="" Q
 S (ORCNT,ORPT)=0
 F  S ORPT=$O(^OR(100.21,ORRPL,10,ORPT)) Q:'ORPT  D
 .S ORPIEN=+$G(^OR(100.21,ORRPL,10,ORPT,0))
 .I ((ORPIEN<0)!(ORPIEN="")) Q
 .S ORCNT=ORCNT+1
 .S LST(ORCNT)=ORPIEN_U_$P(^DPT(ORPIEN,0),U)_U_$$DOB^DPTLK1(ORPIEN,2)_U_$$SSN^DPTLK1(ORPIEN) ; DG249.```




 Generated on January 14th 2017, 7:26:35 am