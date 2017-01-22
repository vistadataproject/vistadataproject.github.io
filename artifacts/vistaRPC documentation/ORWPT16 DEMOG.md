---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT16 DEMOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 DEMOG{:/}
 tag | {::nomarkdown}DEMOG{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEMOG^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> Return common patient demographic info<br/> NAME^SEX^DOB^SSN^WARDID^WARDNAME^RMBED^ADMITTIME^DIED ;^SC%^ELIGTYPE</pre>{:/}
 Code | {::nomarkdown}  S X=^DPT(DFN,0),VAL=$P(X,U,1,3)_U_$P(X,U,9)_U_U_$G(^(.1))_U_$G(^(.101))<br> S X=$P(VAL,U,6) I $L(X) S $P(VAL,U,5)=$O(^SC("B",X,0))<br> S X=$G(^DPT(DFN,.105)) I X S $P(VAL,U,8)=$P(^DGPM(X,0),U,1)<br> I $L($P($G(^DPT(DFN,.35)),U,1)) S $P(VAL,U,9)=$P(^(.35),U,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}