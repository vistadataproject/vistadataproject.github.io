---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET HEALTH FACTORS TY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET HEALTH FACTORS TY{:/}
 tag | {::nomarkdown}HFTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active health factor types.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get the list of active  health factors
 Input Parameters | {::nomarkdown}ADDCATS{:/}
 Lines | {::nomarkdown} N IEN,CNT,BINDEX,REC<br/> S (IEN,CNT,BINDEX)=0,ADDCATS=+$G(ADDCATS)<br/> F  S BINDEX=$O(^AUTTHF("B",BINDEX)) Q:BINDEX']""  D<br/> .F  S IEN=$O(^AUTTHF("B",BINDEX,IEN)) Q:'+IEN  D<br/> ..S REC=$G(^AUTTHF(IEN,0))<br/> ..I +$P(REC,U,11) S REC=""<br/> ..I 'ADDCATS,$P(REC,U,10)="C" S REC=""<br/> ..I REC'="" D<br/> ...S CNT=CNT+1,ORWLST(CNT)=IEN_U_$P(REC,U)<br/> ...I ADDCATS S ORWLST(CNT)=ORWLST(CNT)_U_$P(REC,U,10)_U_$P(REC,U,3){:/}




 Generated on January 13th 2017, 7:15:27 am