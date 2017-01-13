---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 FAILDEA 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 FAILDEA{:/}
 tag | {::nomarkdown}FAILDEA{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return 1 if DEA check fails for this provider
 Input Parameters | {::nomarkdown}OI<br/>ORNP<br/>PSTYPE{:/}
 Lines | ```
 N DEAFLG,PSOI,TPKG,RT,DETFLG,DETPRO
 S FAIL=0,TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2)
 Q:TPKG'["PS"
 S PSOI=+TPKG Q:PSOI'>0
 S DETFLAG=$$OIDETOX^PSSOPKI(PSOI,PSTYPE)
 S DETPRO=$$DETOX^XUSER(+$G(ORNP))
 I DETFLAG,DETPRO="" S FAIL=3 Q
 I DETFLAG,DETPRO>0 S Y=DETPRO X ^DD("DD") S FAIL="5^"_Y Q
 S DEAFLG=$P($$OIDEA^PSSOPKI(PSOI,PSTYPE),";",2) Q:DEAFLG'>0
 I DEAFLG=1 S FAIL=6 Q
 S RT=$$SDEA^XUSER(,+$G(ORNP),DEAFLG) I RT=1 S FAIL=1
 I RT=2 S FAIL="2^"_$$UP^XLFSTR(DEAFLG)
 I RT?1"4".E S FAIL=RT```




 Generated on January 13th 2017, 6:55:29 am