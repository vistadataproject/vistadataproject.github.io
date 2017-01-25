---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT ADMITLST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT ADMITLST{:/}
 tag | {::nomarkdown}ADMITLST{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of admissions for a patient (for visit selection).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ADMITLST^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return a list of admissions
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> MOVETIME^LOCIEN^LOCNAME^TYPE</pre>{:/}
 Code | {::nomarkdown}  N TIM,MOV,X0,Y,MTIM,XTYP,XLOC,HLOC,ILST S ILST=0<br> S TIM="" F  S TIM=$O(^DGPM("ATID1",DFN,TIM)) Q:TIM'>0  D<br> . S MOV=0  F  S MOV=$O(^DGPM("ATID1",DFN,TIM,MOV)) Q:MOV'>0  D<br> . . N VSTR,TIUDA<br> . . S X0=$G(^DGPM(MOV,0)) I X0']"" Q<br> . . S MTIM=$P(X0,U)<br> . . S XTYP=$P($G(^DG(405.1,+$P(X0,U,4),0)),U,1)<br> . . S XLOC=$P($G(^DIC(42,+$P(X0,U,6),0)),U,1),HLOC=+$G(^(44))<br> . . S VSTR=HLOC_";"_MTIM_";H",TIUDA=$$HASDS^TIULX(DFN,VSTR)<br> . . S ILST=ILST+1,LST(ILST)=MTIM_U_HLOC_U_XLOC_U_XTYP_U_MOV_U_TIUDA{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}