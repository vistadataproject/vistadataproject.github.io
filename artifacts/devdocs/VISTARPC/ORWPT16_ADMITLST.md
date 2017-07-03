---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT16 ADMITLST
# ORWPT16 ADMITLST



Property | Value
--- | ---
Label | ADMITLST
Routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ADMITLST^ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
Method Comment | procedure
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> Return a list of admissions</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIM,MOV,X0,Y,MTIM,XTIM,XTYP,XLOC,HLOC,ILST S ILST=0<br/> S TIM="" F  S TIM=$O(^DGPM("ATID1",DFN,TIM)) Q:TIM'>0  D<br/> . S MOV=0  F  S MOV=$O(^DGPM("ATID1",DFN,TIM,MOV)) Q:MOV'>0  D<br/> . . S X0=^DGPM(MOV,0)<br/> . . S MTIM=$P(X0,U,1),Y=MTIM D DD^%DT S XTIM=Y<br/> . . S XTYP=$P($G(^DG(405.1,+$P(X0,U,4),0)),U,1)<br/> . . S XLOC=$P($G(^DIC(42,+$P(X0,U,6),0)),U,1),HLOC=+$G(^(44))<br/> . . S ILST=ILST+1,LST(ILST)=MTIM_U_HLOC_U_XTIM_U_XTYP_U_"TO: "_XLOC<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}