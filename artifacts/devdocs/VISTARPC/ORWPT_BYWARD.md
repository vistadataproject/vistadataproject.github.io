---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT BYWARD
# ORWPT BYWARD

Returns a list of patients currently residing on a specified wardlocation.

Property | Value
--- | ---
Label | BYWARD
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [BYWARD^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return a list of patients in a ward
Input Parameters | WARD
Code | {::nomarkdown}<pre><code> N ILST,DFN<br/> I +$G(WARD)<1 S LST(1)="^No ward identified" Q<br/> S (ILST,DFN)=0<br/> S WARD=$P(^DIC(42,WARD,0),"^")   ;DBIA #36<br/> F  S DFN=$O(^DPT("CN",WARD,DFN)) Q:DFN'>0  D<br/> . S ILST=ILST+1,LST(ILST)=+DFN_U_$P(^DPT(+DFN,0),U)_U_$G(^DPT(+DFN,.101))<br/> I ILST<1 S LST(1)="^No patients found."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}