---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT ADMITLST
# ORWPT ADMITLST

Returns a list of admissions for a patient (for visit selection).

Property | Value
--- | ---
Label | ADMITLST
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ADMITLST^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | return a list of admissions
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> MOVETIME^LOCIEN^LOCNAME^TYPE</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIM,MOV,X0,Y,MTIM,XTYP,XLOC,HLOC,ILST S ILST=0<br/> S TIM="" F  S TIM=$O(^DGPM("ATID1",DFN,TIM)) Q:TIM'>0  D<br/> . S MOV=0  F  S MOV=$O(^DGPM("ATID1",DFN,TIM,MOV)) Q:MOV'>0  D<br/> . . N VSTR,TIUDA<br/> . . S X0=$G(^DGPM(MOV,0)) I X0']"" Q<br/> . . S MTIM=$P(X0,U)<br/> . . S XTYP=$P($G(^DG(405.1,+$P(X0,U,4),0)),U,1)<br/> . . S XLOC=$P($G(^DIC(42,+$P(X0,U,6),0)),U,1),HLOC=+$G(^(44))<br/> . . S VSTR=HLOC_";"_MTIM_";H",TIUDA=$$HASDS^TIULX(DFN,VSTR)<br/> . . S ILST=ILST+1,LST(ILST)=MTIM_U_HLOC_U_XLOC_U_XTYP_U_MOV_U_TIUDA</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}