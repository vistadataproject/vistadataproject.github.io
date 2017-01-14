---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA UNFLAG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA UNFLAG{:/}
 tag | {::nomarkdown}UNFLAG{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Unflag an existing order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | UNFLAG^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Unflag order
 Input parameters | {::nomarkdown}ORIFN<br/>OREASON{:/}
 Code | ```  N DA,ORB,ORNP,ORVP,ORPS
 S DA=$P(ORIFN,";",2),ORVP=+$P(^OR(100,+ORIFN,0),U,2)
 S $P(^OR(100,+ORIFN,8,DA,3),U)=0,$P(^(3),U,6,8)=+$E($$NOW^XLFDT,1,12)_U_DUZ_U_OREASON D MSG^ORCFLAG(ORIFN)
 S $P(^OR(100,+ORIFN,3),U)=$$NOW^XLFDT  ; Last Activity
 S ORNP=+$P($G(^OR(100,+ORIFN,8,DA,0)),U,3)
 S ORB=+ORVP_U_+ORIFN_U_ORNP_"^0" D EN^OCXOERR(ORB) ; notification
 D GETBYIFN^ORWORR(.REC,ORIFN)```




 Generated on January 14th 2017, 7:26:35 am