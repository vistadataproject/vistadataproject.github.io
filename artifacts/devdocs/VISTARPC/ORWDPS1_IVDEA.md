---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS1 IVDEA
# ORWDPS1 IVDEA



Property | Value
--- | ---
Label | FDEA1
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [FDEA1^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | only be called for an outpaitent and IV dialog
Input Parameters | OI, OITYPE, ORNP
First Comment | {::nomarkdown}<pre><code>OI: IV Orderable Item<br/>OITYPE: A:ADDITIVE  S:SOLUTION</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DEAFLG,PSOI,TKPG,RT,DETFLG,DETPRO<br/> S FAIL=0,TPKG=$P($G(^ORD(101.43,+$G(OI),0)),U,2)<br/> Q:TPKG'["PS"<br/> S PSOI=+TPKG Q:PSOI'>0<br/> S DETFLAG=$$OIDETOX^PSSOPKI(PSOI,"I")<br/> S DETPRO=$$DETOX^XUSER(+$G(ORNP))<br/> I DETFLAG,DETPRO="" S FAIL=3 Q<br/> I DETFLAG,DETPRO>0 S Y=DETPRO X ^DD("DD") S FAIL="5^"_Y Q<br/> S DEAFLG=$P($$IVDEA^PSSUTIL1(PSOI,OITYPE),";",2) Q:DEAFLG'>0<br/> I DEAFLG=1 S FAIL=6 Q Q<br/> S RT=$$SDEA^XUSER(,+$G(ORNP),DEAFLG) I RT=1 S FAIL=1<br/> I RT=2 S FAIL="2^"_$$UP^XLFSTR(DEAFLG)<br/> I RT?1"4".E S FAIL=RT</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}