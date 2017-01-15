---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 ID INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 ID INFO{:/}
 tag | {::nomarkdown}IDINFO{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | IDINFO^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | Return identifying information for a patient
 First comment | {::nomarkdown}PID^DOB^AGE^SEX^SC%^TYPE^WARD^RM-BED^NAME{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N OR0,OR36,OR1,OR101,VAEL,VAERR<br> S OR0=$G(^DPT(DFN,0)),OR36=$G(^(.36)),OR1=$G(^(.1)),OR101=$G(^(.101))<br> D ELIG^VADPT<br> S ORY=$P(OR36,U,3)_U_$P(OR0,U,3)_U_U_$P(OR0,U,2)<br> S ORY=ORY_U_$P(VAEL(3),U,2)_U_$P(VAEL(6),U,2)_U_$P(OR1,U)_U_$P(OR101,U)<br> I $P(OR0,U,3) S $P(ORY,U,3)=DT-$P(OR0,U,3)\10000<br> I '$L($P(ORY,U,1)) D<br> . S X=$P(OR0,U,9),$P(ORY,U,1)=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br> S $P(ORY,U,9)=$P(OR0,U,1){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}