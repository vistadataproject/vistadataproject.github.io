---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR UNSIGN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR UNSIGN{:/}
 tag | {::nomarkdown}UNSIGN{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns outstanding unsigned orders.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return Unsigned Orders that are not on client
 Input Parameters | {::nomarkdown}ORVP<br/>HAVE{:/}
 Lines | ```
 N DC,DEL,DG,IFN,ACT,X0,X3,X8,ENT,LVL,TM,ILST,ORELSE,CS,PKG,ORCSPKG,OI
 S ILST=0
 Q:'$D(^XUSEC("ORES",DUZ))&('$D(^XUSEC("ORELSE",DUZ))&'$D(^ORAM(103,+ORVP)))
 S ORVP=ORVP_";DPT("
 S ENT="ALL"_$S($G(^VA(200,DUZ,5)):"^SRV.`"_+^(5),1:"")
 S LVL=$$GET^XPAR(ENT,"OR UNSIGNED ORDERS ON EXIT")
 S ORELSE=$D(^XUSEC("ORELSE",DUZ))
 I ORELSE S LVL=1
 Q:'LVL
 S TM=0 F  S TM=$O(^OR(100,"AS",ORVP,TM)) Q:TM<1  D
 . S IFN=0 F  S IFN=$O(^OR(100,"AS",ORVP,TM,IFN)) Q:IFN<1  D
 . . S ACT=0 F  S ACT=$O(^OR(100,"AS",ORVP,TM,IFN,ACT)) Q:ACT<1  D
 . . . Q:$D(HAVE(IFN_";"_ACT))  ;in Changes
 . . . S X0=$G(^OR(100,IFN,0)),X3=$G(^OR(100,IFN,3))
 . . . S X8=$G(^OR(100,IFN,8,ACT,0))
 . . . ;determine Display Group
 . . . S DG=$P($G(^ORD(100.98,$P(X0,U,11),0)),U,2)
 . . . ;determine if DC
 . . . S DC=$S($P(X8,U,2)="DC":1,1:0)
 . . . ;determine if Delay
 . . . S DEL=$$CHKORD^OREVNTX1(IFN)
 . . . ;determine if controlled substance
 . . . S PKG=$P(X0,"^",14)
 . . . S ORCSPKG=""
 . . . I PKG=$O(^DIC(9.4,"B","OUTPATIENT PHARMACY",0)) S ORCSPKG="O"
 . . . I PKG=$O(^DIC(9.4,"B","UNIT DOSE MEDICATIONS",0)) S ORCSPKG="I"
 . . . I PKG=$O(^DIC(9.4,"B","INPATIENT MEDICATIONS",0)) S ORCSPKG="I"
 . . . I PKG=$O(^DIC(9.4,"B","IV MEDICATIONS",0)) S ORCSPKG="I"
 . . . I ORCSPKG="" S CS="0^0"
 . . . I ORCSPKG'="" D
 . . . . S OI=+$O(^OR(100,IFN,4.5,"ID","ORDERABLE",0)),OI=+$G(^OR(100,IFN,4.5,OI,1))
 . . . . D CSCHECK^ORDEA(.CS,OI,ORCSPKG)
 . . . I '$S(LVL=1&($P(X8,U,3)=DUZ):1,ORELSE&($P(X8,U,13)=DUZ):1,LVL=2:1,1:0) Q  ;chk user
 . . . ;if Nurse, and order is already released or held for signature, don't include in list
 . . . I ORELSE,$S((+$P(X8,U,16)>0):1,$D(^OR(100,IFN,5)):1,1:0) Q
 . . . S ILST=ILST+1,LST(ILST)=IFN_";"_ACT_U_$P(X8,U,3)_U_DG_U_DC_U_DEL_U_CS```




 Generated on January 13th 2017, 6:55:29 am