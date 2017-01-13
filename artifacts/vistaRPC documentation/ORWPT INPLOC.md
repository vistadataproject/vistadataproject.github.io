---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT INPLOC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT INPLOC{:/}
 tag | {::nomarkdown}INPLOC{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the patient's current location if an inpatient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a patient's current location
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```{::nomarkdown} N X<br/> S X=$G(^DPT(DFN,.102)),REC=0<br/> I X S X=$P($G(^DGPM(X,0)),U,6)<br/> I X S REC=+$G(^DIC(42,X,44))<br/> I X S $P(REC,U,2)=$P($G(^DIC(42,X,0)),U,1)<br/> I X S X=$P($G(^DIC(42,X,0)),U,3)<br/> S $P(REC,U,3)=X```{:/}




 Generated on January 13th 2017, 7:11:27 am