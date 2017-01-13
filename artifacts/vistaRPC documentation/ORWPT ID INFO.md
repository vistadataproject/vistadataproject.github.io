---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT ID INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT ID INFO{:/}
 tag | {::nomarkdown}IDINFO{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns identifying information for a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return identifying information for a patient
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N X0,X1,X101,X3,XV  ; name/dob/sex/ssn, ward, room-bed, sc%, vet
 S X0=$G(^DPT(DFN,0)),X1=$G(^(.1)),X101=$G(^(.101)),X3=$G(^(.3)),XV=$G(^("VET"))
 S REC=$$SSN^DPTLK1(DFN)_U_$$DOB^DPTLK1(DFN,2)_U_$P(X0,U,2)_U_$P(XV,U)_U_$P(X3,U,2)_U_$P(X1,U)_U_$P(X101,U)_U_$P(X0,U) ;DG249```
 Leading comment lines | {::nomarkdown}PID^DOB^SEX^VET^SC%^WARD^RM-BED^NAME{:/}




 Generated on January 13th 2017, 6:55:28 am