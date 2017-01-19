---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT ID INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT ID INFO{:/}
 tag | {::nomarkdown}IDINFO{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns identifying information for a patient.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IDINFO^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return identifying information for a patient
 First comment | {::nomarkdown}<pre> PID^DOB^SEX^VET^SC%^WARD^RM-BED^NAME</pre>{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N X0,X1,X101,X3,XV  ; name/dob/sex/ssn, ward, room-bed, sc%, vet<br> S X0=$G(^DPT(DFN,0)),X1=$G(^(.1)),X101=$G(^(.101)),X3=$G(^(.3)),XV=$G(^("VET"))<br> S REC=$$SSN^DPTLK1(DFN)_U_$$DOB^DPTLK1(DFN,2)_U_$P(X0,U,2)_U_$P(XV,U)_U_$P(X3,U,2)_U_$P(X1,U)_U_$P(X101,U)_U_$P(X0,U) ;DG249{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}