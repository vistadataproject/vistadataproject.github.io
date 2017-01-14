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
 Lines | {::nomarkdown} N DC,DEL,DG,IFN,ACT,X0,X3,X8,ENT,LVL,TM,ILST,ORELSE,CS,PKG,ORCSPKG,OI<br/> S ILST=0<br/> Q:'$D(^XUSEC("ORES",DUZ))&('$D(^XUSEC("ORELSE",DUZ))&'$D(^ORAM(103,+ORVP)))<br/> S ORVP=ORVP_";DPT("<br/> S ENT="ALL"_$S($G(^VA(200,DUZ,5)):"^SRV.`"_+^(5),1:"")<br/> S LVL=$$GET^XPAR(ENT,"OR UNSIGNED ORDERS ON EXIT")<br/> S ORELSE=$D(^XUSEC("ORELSE",DUZ))<br/> I ORELSE S LVL=1<br/> Q:'LVL<br/> S TM=0 F  S TM=$O(^OR(100,"AS",ORVP,TM)) Q:TM<1  D<br/> . S IFN=0 F  S IFN=$O(^OR(100,"AS",ORVP,TM,IFN)) Q:IFN<1  D<br/> . . S ACT=0 F  S ACT=$O(^OR(100,"AS",ORVP,TM,IFN,ACT)) Q:ACT<1  D<br/> . . . Q:$D(HAVE(IFN_";"_ACT))  ;in Changes<br/> . . . S X0=$G(^OR(100,IFN,0)),X3=$G(^OR(100,IFN,3))<br/> . . . S X8=$G(^OR(100,IFN,8,ACT,0))<br/> . . . ;determine Display Group<br/> . . . S DG=$P($G(^ORD(100.98,$P(X0,U,11),0)),U,2)<br/> . . . ;determine if DC<br/> . . . S DC=$S($P(X8,U,2)="DC":1,1:0)<br/> . . . ;determine if Delay<br/> . . . S DEL=$$CHKORD^OREVNTX1(IFN)<br/> . . . ;determine if controlled substance<br/> . . . S PKG=$P(X0,"^",14)<br/> . . . S ORCSPKG=""<br/> . . . I PKG=$O(^DIC(9.4,"B","OUTPATIENT PHARMACY",0)) S ORCSPKG="O"<br/> . . . I PKG=$O(^DIC(9.4,"B","UNIT DOSE MEDICATIONS",0)) S ORCSPKG="I"<br/> . . . I PKG=$O(^DIC(9.4,"B","INPATIENT MEDICATIONS",0)) S ORCSPKG="I"<br/> . . . I PKG=$O(^DIC(9.4,"B","IV MEDICATIONS",0)) S ORCSPKG="I"<br/> . . . I ORCSPKG="" S CS="0^0"<br/> . . . I ORCSPKG'="" D<br/> . . . . S OI=+$O(^OR(100,IFN,4.5,"ID","ORDERABLE",0)),OI=+$G(^OR(100,IFN,4.5,OI,1))<br/> . . . . D CSCHECK^ORDEA(.CS,OI,ORCSPKG)<br/> . . . I '$S(LVL=1&($P(X8,U,3)=DUZ):1,ORELSE&($P(X8,U,13)=DUZ):1,LVL=2:1,1:0) Q  ;chk user<br/> . . . ;if Nurse, and order is already released or held for signature, don't include in list<br/> . . . I ORELSE,$S((+$P(X8,U,16)>0):1,$D(^OR(100,IFN,5)):1,1:0) Q<br/> . . . S ILST=ILST+1,LST(ILST)=IFN_";"_ACT_U_$P(X8,U,3)_U_DG_U_DC_U_DEL_U_CS{:/}




 Generated on January 13th 2017, 7:15:27 am