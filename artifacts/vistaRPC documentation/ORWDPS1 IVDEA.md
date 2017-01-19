---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 IVDEA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 IVDEA{:/}
 tag | {::nomarkdown}FDEA1{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FDEA1^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | only be called for an outpaitent and IV dialog
 First comment | {::nomarkdown}<pre>OI: IV Orderable Item<br/>OITYPE: A:ADDITIVE  S:SOLUTION</pre>{:/}
 Input parameters | {::nomarkdown}OI<br>OITYPE<br>ORNP{:/}
 Code | {::nomarkdown}  N DEAFLG,PSOI,TKPG,RT,DETFLG,DETPRO<br> S FAIL=0,TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2)<br> Q:TPKG'["PS"<br> S PSOI=+TPKG Q:PSOI'>0<br> S DETFLAG=$$OIDETOX^PSSOPKI(PSOI,"I")<br> S DETPRO=$$DETOX^XUSER(+$G(ORNP))<br> I DETFLAG,DETPRO="" S FAIL=3 Q<br> I DETFLAG,DETPRO>0 S Y=DETPRO X ^DD("DD") S FAIL="5^"_Y Q<br> S DEAFLG=$P($$IVDEA^PSSUTIL1(PSOI,OITYPE),";",2) Q:DEAFLG'>0<br> I DEAFLG=1 S FAIL=6 Q Q<br> S RT=$$SDEA^XUSER(,+$G(ORNP),DEAFLG) I RT=1 S FAIL=1<br> I RT=2 S FAIL="2^"_$$UP^XLFSTR(DEAFLG)<br> I RT?1"4".E S FAIL=RT{:/}


### CPRS

[Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}