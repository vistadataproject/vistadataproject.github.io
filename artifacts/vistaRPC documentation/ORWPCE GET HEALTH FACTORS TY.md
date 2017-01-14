---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE GET HEALTH FACTORS TY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE GET HEALTH FACTORS TY{:/}
 tag | {::nomarkdown}HFTYPE{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of active health factor types.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | HFTYPE^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | get the list of active  health factors
 Input parameters | {::nomarkdown}ADDCATS{:/}
 Code | {::nomarkdown}  N IEN,CNT,BINDEX,REC<br> S (IEN,CNT,BINDEX)=0,ADDCATS=+$G(ADDCATS)<br> F  S BINDEX=$O(^AUTTHF("B",BINDEX)) Q:BINDEX']""  D<br> .F  S IEN=$O(^AUTTHF("B",BINDEX,IEN)) Q:'+IEN  D<br> ..S REC=$G(^AUTTHF(IEN,0))<br> ..I +$P(REC,U,11) S REC=""<br> ..I 'ADDCATS,$P(REC,U,10)="C" S REC=""<br> ..I REC'="" D<br> ...S CNT=CNT+1,ORWLST(CNT)=IEN_U_$P(REC,U)<br> ...I ADDCATS S ORWLST(CNT)=ORWLST(CNT)_U_$P(REC,U,10)_U_$P(REC,U,3){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}