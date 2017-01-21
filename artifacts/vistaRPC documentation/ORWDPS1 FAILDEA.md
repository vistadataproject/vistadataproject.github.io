---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 FAILDEA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 FAILDEA{:/}
 tag | {::nomarkdown}FAILDEA{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FAILDEA^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return 1 if DEA check fails for this provider
 Input parameters | {::nomarkdown}OI, ORNP, PSTYPE{:/}
 Code | {::nomarkdown}  N DEAFLG,PSOI,TPKG,RT,DETFLG,DETPRO<br> S FAIL=0,TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2)<br> Q:TPKG'["PS"<br> S PSOI=+TPKG Q:PSOI'>0<br> S DETFLAG=$$OIDETOX^PSSOPKI(PSOI,PSTYPE)<br> S DETPRO=$$DETOX^XUSER(+$G(ORNP))<br> I DETFLAG,DETPRO="" S FAIL=3 Q<br> I DETFLAG,DETPRO>0 S Y=DETPRO X ^DD("DD") S FAIL="5^"_Y Q<br> S DEAFLG=$P($$OIDEA^PSSOPKI(PSOI,PSTYPE),";",2) Q:DEAFLG'>0<br> I DEAFLG=1 S FAIL=6 Q<br> S RT=$$SDEA^XUSER(,+$G(ORNP),DEAFLG) I RT=1 S FAIL=1<br> I RT=2 S FAIL="2^"_$$UP^XLFSTR(DEAFLG)<br> I RT?1"4".E S FAIL=RT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}