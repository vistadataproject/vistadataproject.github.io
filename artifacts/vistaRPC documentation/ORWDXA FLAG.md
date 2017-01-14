---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA FLAG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA FLAG{:/}
 tag | {::nomarkdown}FLAG{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Flag an existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Flag order
 Input Parameters | {::nomarkdown}ORIFN<br/>OREASON<br/>ORNP{:/}
 Lines | {::nomarkdown} N ORB,ORVP,DA,ORPS<br/> D BULLETIN<br/> S DA=$P(ORIFN,";",2),ORVP=+$P(^OR(100,+ORIFN,0),U,2)<br/> K ^OR(100,+ORIFN,8,DA,3) S ^(3)="1^"_$G(XMZ)_U_+$E($$NOW^XLFDT,1,12)_U_DUZ_U_OREASON_$S($G(ORNP):"^^^^"_+ORNP,1:"")<br/> D KILL^XM,MSG^ORCFLAG(ORIFN)<br/> S $P(^OR(100,+ORIFN,3),U)=$$NOW^XLFDT ; Last Activity<br/> I +$G(ORNP)<1 S ORNP=+$P($G(^OR(100,+ORIFN,8,DA,0)),U,3)<br/> S ORB=+ORVP_U_+ORIFN_U_ORNP_"^1" D EN^OCXOERR(ORB) ; notification<br/> D GETBYIFN^ORWORR(.REC,ORIFN){:/}




 Generated on January 13th 2017, 7:15:27 am