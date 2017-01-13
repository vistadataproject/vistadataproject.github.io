---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE NOTEVSTR 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE NOTEVSTR{:/}
 tag | {::nomarkdown}NOTEVSTR{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns VISIT LOCATION;EPISODE BEGIN DATE;VISIT TYPE from the TIU DOCUMENTfile.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return the VSTR^AUTHOR for a note
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```{::nomarkdown} N X0,X12,VISIT<br/> S X0=$G(^TIU(8925,+IEN,0)),X12=$G(^(12)),VISIT=$P(X12,U,7)<br/> I +VISIT S VAL=$$VSTRBLD^TIUSRVP(VISIT) I 1<br/> E  S VAL=$P(X12,U,11)_";"_$P(X0,U,7)_";"_$P(X0,U,13)```{:/}




 Generated on January 13th 2017, 7:11:26 am