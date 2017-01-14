---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE GET HEALTH FACTORS TY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET HEALTH FACTORS TY{:/}
 tag | {::nomarkdown}HFTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active health factor types.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HFTYPE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | get the list of active  health factors
 Input parameters | {::nomarkdown}ADDCATS{:/}
 Code | ```  N IEN,CNT,BINDEX,REC
 S (IEN,CNT,BINDEX)=0,ADDCATS=+$G(ADDCATS)
 F  S BINDEX=$O(^AUTTHF("B",BINDEX)) Q:BINDEX']""  D
 .F  S IEN=$O(^AUTTHF("B",BINDEX,IEN)) Q:'+IEN  D
 ..S REC=$G(^AUTTHF(IEN,0))
 ..I +$P(REC,U,11) S REC=""
 ..I 'ADDCATS,$P(REC,U,10)="C" S REC=""
 ..I REC'="" D
 ...S CNT=CNT+1,ORWLST(CNT)=IEN_U_$P(REC,U)
 ...I ADDCATS S ORWLST(CNT)=ORWLST(CNT)_U_$P(REC,U,10)_U_$P(REC,U,3)```




 Generated on January 14th 2017, 7:26:35 am