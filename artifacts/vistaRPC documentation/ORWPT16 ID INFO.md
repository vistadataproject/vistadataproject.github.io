---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 ID INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 ID INFO{:/}
 tag | {::nomarkdown}IDINFO{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return identifying information for a patient
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N OR0,OR36,OR1,OR101,VAEL,VAERR
 S OR0=$G(^DPT(DFN,0)),OR36=$G(^(.36)),OR1=$G(^(.1)),OR101=$G(^(.101))
 D ELIG^VADPT
 S ORY=$P(OR36,U,3)_U_$P(OR0,U,3)_U_U_$P(OR0,U,2)
 S ORY=ORY_U_$P(VAEL(3),U,2)_U_$P(VAEL(6),U,2)_U_$P(OR1,U)_U_$P(OR101,U)
 I $P(OR0,U,3) S $P(ORY,U,3)=DT-$P(OR0,U,3)\10000
 I '$L($P(ORY,U,1)) D
 . S X=$P(OR0,U,9),$P(ORY,U,1)=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)
 S $P(ORY,U,9)=$P(OR0,U,1)```
 Leading comment lines | {::nomarkdown}PID^DOB^AGE^SEX^SC%^TYPE^WARD^RM-BED^NAME{:/}




 Generated on January 13th 2017, 6:55:28 am