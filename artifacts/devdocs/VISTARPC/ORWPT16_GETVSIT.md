---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT16 GETVSIT
# ORWPT16 GETVSIT



Property | Value
--- | ---
Label | GETVSIT
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETVSIT^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | procedure
Input Parameters | DFN, LOC, ADATE
First Comment | {::nomarkdown}<pre><code> Return a visit given a patient, location, and date/time</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N VSIT,VSITPKG<br/> S (VSIT,VSIT("VDT"))=ADATE,VSIT("PAT")=DFN,VSIT("LOC")=LOC<br/> S VSIT("SVC")="A",VSIT("PRI")="P",VSIT(0)="NMD1",VSITPKG="OR"<br/> D ^VSIT<br/> S Y=VSIT("IEN") I +VSIT("IEN")'>0 S Y="" Q<br/> I +VSIT("LOC") S Y=Y_U_VSIT("LOC")_U_$P(^SC(+VSIT("LOC"),0),U,1,2)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}