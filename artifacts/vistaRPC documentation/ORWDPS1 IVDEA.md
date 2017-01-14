---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS1 IVDEA 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 IVDEA{:/}
 tag | {::nomarkdown}FDEA1{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FDEA1^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | only be called for an outpaitent and IV dialog
 First comment | {::nomarkdown}OI: IV Orderable Item<br/>OITYPE: A:ADDITIVE  S:SOLUTION{:/}
 Input parameters | {::nomarkdown}OI<br/>OITYPE<br/>ORNP{:/}
 Code | ```  N DEAFLG,PSOI,TKPG,RT,DETFLG,DETPRO
 S FAIL=0,TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2)
 Q:TPKG'["PS"
 S PSOI=+TPKG Q:PSOI'>0
 S DETFLAG=$$OIDETOX^PSSOPKI(PSOI,"I")
 S DETPRO=$$DETOX^XUSER(+$G(ORNP))
 I DETFLAG,DETPRO="" S FAIL=3 Q
 I DETFLAG,DETPRO>0 S Y=DETPRO X ^DD("DD") S FAIL="5^"_Y Q
 S DEAFLG=$P($$IVDEA^PSSUTIL1(PSOI,OITYPE),";",2) Q:DEAFLG'>0
 I DEAFLG=1 S FAIL=6 Q Q
 S RT=$$SDEA^XUSER(,+$G(ORNP),DEAFLG) I RT=1 S FAIL=1
 I RT=2 S FAIL="2^"_$$UP^XLFSTR(DEAFLG)
 I RT?1"4".E S FAIL=RT```




 Generated on January 14th 2017, 7:26:35 am