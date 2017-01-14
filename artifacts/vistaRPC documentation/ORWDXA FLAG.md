---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA FLAG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA FLAG{:/}
 tag | {::nomarkdown}FLAG{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Flag an existing order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FLAG^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Flag order
 Input parameters | {::nomarkdown}ORIFN<br/>OREASON<br/>ORNP{:/}
 Code | ```  N ORB,ORVP,DA,ORPS
 D BULLETIN
 S DA=$P(ORIFN,";",2),ORVP=+$P(^OR(100,+ORIFN,0),U,2)
 K ^OR(100,+ORIFN,8,DA,3) S ^(3)="1^"_$G(XMZ)_U_+$E($$NOW^XLFDT,1,12)_U_DUZ_U_OREASON_$S($G(ORNP):"^^^^"_+ORNP,1:"")
 D KILL^XM,MSG^ORCFLAG(ORIFN)
 S $P(^OR(100,+ORIFN,3),U)=$$NOW^XLFDT ; Last Activity
 I +$G(ORNP)<1 S ORNP=+$P($G(^OR(100,+ORIFN,8,DA,0)),U,3)
 S ORB=+ORVP_U_+ORIFN_U_ORNP_"^1" D EN^OCXOERR(ORB) ; notification
 D GETBYIFN^ORWORR(.REC,ORIFN)```




 Generated on January 14th 2017, 7:26:35 am