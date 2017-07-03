---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS1 FAILDEA
# ORWDPS1 FAILDEA



Property | Value
--- | ---
Label | FAILDEA
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [FAILDEA^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return 1 if DEA check fails for this provider
Input Parameters | OI, ORNP, PSTYPE
Code | {::nomarkdown}<pre><code> N DEAFLG,PSOI,TPKG,RT,DETFLG,DETPRO<br/> S FAIL=0,TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2)<br/> Q:TPKG'["PS"<br/> S PSOI=+TPKG Q:PSOI'>0<br/> S DETFLAG=$$OIDETOX^PSSOPKI(PSOI,PSTYPE)<br/> S DETPRO=$$DETOX^XUSER(+$G(ORNP))<br/> I DETFLAG,DETPRO="" S FAIL=3 Q<br/> I DETFLAG,DETPRO>0 S Y=DETPRO X ^DD("DD") S FAIL="5^"_Y Q<br/> S DEAFLG=$P($$OIDEA^PSSOPKI(PSOI,PSTYPE),";",2) Q:DEAFLG'>0<br/> I DEAFLG=1 S FAIL=6 Q<br/> S RT=$$SDEA^XUSER(,+$G(ORNP),DEAFLG) I RT=1 S FAIL=1<br/> I RT=2 S FAIL="2^"_$$UP^XLFSTR(DEAFLG)<br/> I RT?1"4".E S FAIL=RT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}