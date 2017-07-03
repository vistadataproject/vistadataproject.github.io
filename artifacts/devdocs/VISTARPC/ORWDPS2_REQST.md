---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS2 REQST
# ORWDPS2 REQST



Property | Value
--- | ---
Label | REQST
Routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [REQST^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Method Comment | return requested start time
Input Parameters | DFN, SCH, OI, LOC, TXT
First Comment | {::nomarkdown}<pre><code> VAL: FirstAdmin time</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=""<br/> Q:'$L($G(SCH))  Q:'$G(OI)<br/> S OI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br/> S LOC=+$G(^SC(LOC,42))<br/> S VAL=$P($$RESOLVE^PSJORPOE(DFN,SCH,OI,TXT,LOC),U,2)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}