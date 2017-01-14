---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT16 ADMITLST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT16 ADMITLST{:/}
 tag | {::nomarkdown}ADMITLST{:/}
 routine | [ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ADMITLST^[ORWPT16](http://code.osehra.org/dox/Routine_ORWPT16_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Return a list of admissions{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  N TIM,MOV,X0,Y,MTIM,XTIM,XTYP,XLOC,HLOC,ILST S ILST=0
 S TIM="" F  S TIM=$O(^DGPM("ATID1",DFN,TIM)) Q:TIM'>0  D
 . S MOV=0  F  S MOV=$O(^DGPM("ATID1",DFN,TIM,MOV)) Q:MOV'>0  D
 . . S X0=^DGPM(MOV,0)
 . . S MTIM=$P(X0,U,1),Y=MTIM D DD^%DT S XTIM=Y
 . . S XTYP=$P($G(^DG(405.1,+$P(X0,U,4),0)),U,1)
 . . S XLOC=$P($G(^DIC(42,+$P(X0,U,6),0)),U,1),HLOC=+$G(^(44))
 . . S ILST=ILST+1,LST(ILST)=MTIM_U_HLOC_U_XTIM_U_XTYP_U_"TO: "_XLOC
```




 Generated on January 14th 2017, 7:26:35 am