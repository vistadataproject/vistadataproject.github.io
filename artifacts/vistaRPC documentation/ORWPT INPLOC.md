---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT INPLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT INPLOC{:/}
 tag | {::nomarkdown}INPLOC{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the patient's current location if an inpatient.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | INPLOC^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return a patient's current location
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  N X<br> S X=$G(^DPT(DFN,.102)),REC=0<br> I X S X=$P($G(^DGPM(X,0)),U,6)<br> I X S REC=+$G(^DIC(42,X,44))<br> I X S $P(REC,U,2)=$P($G(^DIC(42,X,0)),U,1)<br> I X S X=$P($G(^DIC(42,X,0)),U,3)<br> S $P(REC,U,3)=X{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}