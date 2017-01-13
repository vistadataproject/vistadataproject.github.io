---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX SAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Save the order by passing in the following information:        ORVP=DFN        ORNP=Provider        ORL=Location        DLG=Order Dialog,        ORDG=Display Group        ORIT=Quick Order Dialog,        ORIFN=null if new order        ORDIALOG=Response List{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORVP<br/>ORNP<br/>ORL<br/>DLG<br/>ORDG<br/>ORIT<br/>ORIFN<br/>ORDIALOG<br/>ORDEA<br/>ORAPPT<br/>ORSRC<br/>OREVTDF{:/}
 Lines | ```
 N ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG,ORLEAD,ORTRAIL,ORPKG,ORWP94,ORCATFN,OREVTYPE,ONPASS
 N XCNT,XCOMM,XDONE,XX  ;SBR
 S (XCOMM,XCNT)=""  ;SBR
 I $G(ORIFN)'="" D  ;SBR problem only occurs on change or renew orders
 . S XCNT=$O(^OR(100,+ORIFN,4.5,"ID","COMMENT",XCNT))  ;SBR
 . I XCNT'="" S XCOMM=$P($G(^OR(100,+ORIFN,4.5,XCNT,0)),"^",2)  ;SBR
 . I XCOMM'="" S XDONE=0,XX="" F  S XX=$O(ORDIALOG("WP",XCOMM,1,XX)) Q:XX=""  D  ;SBR
 . . I ORDIALOG("WP",XCOMM,1,XX,0)'="" S XDONE=1 Q  ;SBR
 . I XCOMM'="",'$G(XDONE),$D(ORDIALOG("WP",XCOMM)) K ORDIALOG("WP",XCOMM)  ;SBR
 S ORCATFN="" I $L($P(DLG,U,2)) S ORCATFN=$P(DLG,U,2),DLG=$P(DLG,U,1)
 I $G(^DPT(ORVP,.1))'="",$P($G(^ORD(100.98,ORDG,0)),U)="CLINIC MEDICATIONS" K ORDIALOG("ORTS")
 I $G(^DPT(ORVP,.1))'="",$P($G(^ORD(100.98,ORDG,0)),U)="CLINIC INFUSIONS" K ORDIALOG("ORTS")
 I $G(ORDIALOG("ORTS")) S ORTS=ORDIALOG("ORTS") K ORDIALOG("ORTS")
 I $G(ORDIALOG("ORSLOG")) S ORLOG=ORDIALOG("ORSLOG") K ORDIALOG("ORSLOG")
 I $D(ORDIALOG("OREVENT")) S OREVENT=ORDIALOG("OREVENT") K ORDIALOG("OREVENT")
 S ORCAT=$$INPT^ORCD,ORCAT=$S(ORCAT=1:"I",1:"O")
 I DLG="PS MEDS" S ORWP94=1 D
 . I ORIT=$O(^ORD(101.41,"AB","PSO SUPPLY",0)) S DLG="PSO SUPPLY"
 . I ORIT=$O(^ORD(101.41,"AB","PSO OERR",0)) S DLG="PSO OERR"
 . I ORIT=$O(^ORD(101.41,"AB","PSJ OR PAT OE",0)) S DLG="PSJ OR PAT OE"
 I DLG="PSO OERR"!(DLG="PSO SUPPLY") S ORCAT="O" I $G(OREVENT("EFFECTIVE")) D
 . S ORDIALOG($O(^ORD(101.41,"B","OR GTX START DATE"_$S($G(ORWP94):"/TIME",1:""),0)),1)=OREVENT("EFFECTIVE")
 I DLG="PSJ OR PAT OE" S ORCAT="I"
 I DLG="PSJ OR CLINIC OE" S ORCAT="I"
 I DLG="CLINIC OR PAT FLUID OE" S ORCAT="I"
 S:DLG="FHW1" ORCAT="I" S:DLG?1"FHW "2.7U1" MEAL" ORCAT="O"
 S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)
 I ORDG=$O(^ORD(100.98,"B","LAB",0)) D  ;use section
 . N OI,SUB S OI=+$G(ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1))
 . S SUB=$P($G(^ORD(101.43,OI,"LR")),U,6),ORDG=$$DGRP^ORMLR(SUB)
 K:'ORDG ORDG K:'ORIT ORIT ; Dgrp & Quick must be non-zero
 M ORCHECK=ORDIALOG("ORCHECK") K ORDIALOG("ORCHECK")
 S ORDIALOG=$O(^ORD(101.41,"AB",DLG,0))
 I 'ORDIALOG S ORDIALOG=$O(^ORD(101.41,"B",DLG,0))
 I $D(ORDIALOG("ORLEAD")) S ORLEAD=ORDIALOG("ORLEAD")
 I $D(ORDIALOG("ORTRAIL")) S ORTRAIL=ORDIALOG("ORTRAIL")
 D GETDLG1^ORCD(ORDIALOG)
 I $L(ORCATFN) S ORCAT=ORCATFN
 I $G(ORWP94) D
 . N SIGPRMT S SIGPRMT=$O(^ORD(101.41,"B","OR GTX SIG",0))
 . N INSPRMT S INSPRMT=$O(^ORD(101.41,"B","OR GTX INSTRUCTIONS",0))
 . I $L($G(ORDIALOG(SIGPRMT,1))) S ORDIALOG(INSPRMT,"FORMAT")="@"
 . I ORCAT="O" S ORPKG=$O(^DIC(9.4,"C","PSO",0))
 . I ORCAT="I" S ORPKG=$O(^DIC(9.4,"C","PSJ",0))
 S ORSRC=$G(ORSRC)
 D DELPI^ORWDX1 ;delete empty PI
 I $G(ORIFN)="" D  ; new order
 . D EN^ORCSAVE
 . S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)
 . I '$D(^TMP("ORECALL",$J,ORDIALOG)) M ^TMP("ORECALL",$J,ORDIALOG)=ORDIALOG
 E  D
 . N OR0
 . S OR0=$G(^OR(100,+ORIFN,0)),ORSTS=$P($G(^(3)),U,3),ORDG=$P(OR0,U,11)
 . I $L($P(OR0,U,17)),ORSTS=10 S OREVENT=$P(OR0,U,17),OREVENT("TS")=$P(OR0,U,13)
 . D XX^ORCSAVE ; edit order
 . S REC="" S ORIFN=+ORIFN_";"_ORDA D GETBYIFN^ORWORR(.REC,ORIFN)```
 Leading comment lines | {::nomarkdown}ORVP=DFN, ORNP=Provider, ORL=Location, DLG=Order Dialog,<br/>ORDG=Display Group, ORIT=Quick Order Dialog, ORAPPT=Appointment{:/}




 Generated on January 13th 2017, 6:55:29 am