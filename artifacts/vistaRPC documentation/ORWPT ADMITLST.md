---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT ADMITLST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT ADMITLST{:/}
 tag | {::nomarkdown}ADMITLST{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of admissions for a patient (for visit selection).{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ADMITLST^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return a list of admissions
 First comment | {::nomarkdown}MOVETIME^LOCIEN^LOCNAME^TYPE{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N TIM,MOV,X0,Y,MTIM,XTYP,XLOC,HLOC,ILST S ILST=0
 S TIM="" F  S TIM=$O(^DGPM("ATID1",DFN,TIM)) Q:TIM'>0  D
 . S MOV=0  F  S MOV=$O(^DGPM("ATID1",DFN,TIM,MOV)) Q:MOV'>0  D
 . . N VSTR,TIUDA
 . . S X0=$G(^DGPM(MOV,0)) I X0']"" Q
 . . S MTIM=$P(X0,U)
 . . S XTYP=$P($G(^DG(405.1,+$P(X0,U,4),0)),U,1)
 . . S XLOC=$P($G(^DIC(42,+$P(X0,U,6),0)),U,1),HLOC=+$G(^(44))
 . . S VSTR=HLOC_";"_MTIM_";H",TIUDA=$$HASDS^TIULX(DFN,VSTR)
 . . S ILST=ILST+1,LST(ILST)=MTIM_U_HLOC_U_XLOC_U_XTYP_U_MOV_U_TIUDA```




 Generated on January 14th 2017, 7:26:35 am