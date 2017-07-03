---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT16 ID INFO
# ORWPT16 ID INFO



Property | Value
--- | ---
Label | IDINFO
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [IDINFO^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | Return identifying information for a patient
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> PID^DOB^AGE^SEX^SC%^TYPE^WARD^RM-BED^NAME</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N OR0,OR36,OR1,OR101,VAEL,VAERR<br/> S OR0=$G(^DPT(DFN,0)),OR36=$G(^(.36)),OR1=$G(^(.1)),OR101=$G(^(.101))<br/> D ELIG^VADPT<br/> S ORY=$P(OR36,U,3)_U_$P(OR0,U,3)_U_U_$P(OR0,U,2)<br/> S ORY=ORY_U_$P(VAEL(3),U,2)_U_$P(VAEL(6),U,2)_U_$P(OR1,U)_U_$P(OR101,U)<br/> I $P(OR0,U,3) S $P(ORY,U,3)=DT-$P(OR0,U,3)\10000<br/> I '$L($P(ORY,U,1)) D<br/> . S X=$P(OR0,U,9),$P(ORY,U,1)=$E(X,1,3)_"-"_$E(X,4,5)_"-"_$E(X,6,99)<br/> S $P(ORY,U,9)=$P(OR0,U,1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}