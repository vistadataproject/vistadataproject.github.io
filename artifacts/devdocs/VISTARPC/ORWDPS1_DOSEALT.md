---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS1 DOSEALT
# ORWDPS1 DOSEALT



Property | Value
--- | ---
Label | DOSEALT
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [DOSEALT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return a list of formulary alternatives for dose
Input Parameters | DDRUG, CUROI, PSTYPE
Code | {::nomarkdown}<pre><code> N I,OI,ORWLST,ILST S ILST=0<br/> D ENRFA^PSJORUTL(DDRUG,PSTYPE,.ORWLST)<br/> S I=0 F  S I=$O(ORWLST(I)) Q:'I  D<br/> . S OI=+$O(^ORD(101.43,"ID",+$P(ORWLST(I),U,4)_";99PSP",0))<br/> . I OI,OI'=CUROI S ILST=ILST+1,LST(ILST)=OI_U_$P(^ORD(101.43,OI,0),U)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}