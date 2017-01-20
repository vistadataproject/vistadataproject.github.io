---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SAVE{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Save the order by passing in the following information:        ORVP=DFN        ORNP=Provider        ORL=Location        DLG=Order Dialog,        ORDG=Display Group        ORIT=Quick Order Dialog,        ORIFN=null if new order        ORDIALOG=Response List{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVE^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Input parameters | {::nomarkdown}ORVP, ORNP, ORL, DLG, ORDG, ORIT, ORIFN, ORDIALOG, ORDEA, ORAPPT, ORSRC, OREVTDF{:/}
 First comment | {::nomarkdown}<pre> ORVP=DFN, ORNP=Provider, ORL=Location, DLG=Order Dialog,<br/> ORDG=Display Group, ORIT=Quick Order Dialog, ORAPPT=Appointment</pre>{:/}
 Code | {::nomarkdown}  N ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG,ORLEAD,ORTRAIL,ORPKG,ORWP94,ORCATFN,OREVTYPE,ONPASS<br> N XCNT,XCOMM,XDONE,XX  ;SBR<br> S (XCOMM,XCNT)=""  ;SBR<br> I $G(ORIFN)'="" D  ;SBR problem only occurs on change or renew orders<br> . S XCNT=$O(^OR(100,+ORIFN,4.5,"ID","COMMENT",XCNT))  ;SBR<br> . I XCNT'="" S XCOMM=$P($G(^OR(100,+ORIFN,4.5,XCNT,0)),"^",2)  ;SBR<br> . I XCOMM'="" S XDONE=0,XX="" F  S XX=$O(ORDIALOG("WP",XCOMM,1,XX)) Q:XX=""  D  ;SBR<br> . . I ORDIALOG("WP",XCOMM,1,XX,0)'="" S XDONE=1 Q  ;SBR<br> . I XCOMM'="",'$G(XDONE),$D(ORDIALOG("WP",XCOMM)) K ORDIALOG("WP",XCOMM)  ;SBR<br> S ORCATFN="" I $L($P(DLG,U,2)) S ORCATFN=$P(DLG,U,2),DLG=$P(DLG,U,1)<br> I $G(^DPT(ORVP,.1))'="",$P($G(^ORD(100.98,ORDG,0)),U)="CLINIC MEDICATIONS" K ORDIALOG("ORTS")<br> I $G(^DPT(ORVP,.1))'="",$P($G(^ORD(100.98,ORDG,0)),U)="CLINIC INFUSIONS" K ORDIALOG("ORTS")<br> I $G(ORDIALOG("ORTS")) S ORTS=ORDIALOG("ORTS") K ORDIALOG("ORTS")<br> I $G(ORDIALOG("ORSLOG")) S ORLOG=ORDIALOG("ORSLOG") K ORDIALOG("ORSLOG")<br> I $D(ORDIALOG("OREVENT")) S OREVENT=ORDIALOG("OREVENT") K ORDIALOG("OREVENT")<br> S ORCAT=$$INPT^ORCD,ORCAT=$S(ORCAT=1:"I",1:"O")<br> I DLG="PS MEDS" S ORWP94=1 D<br> . I ORIT=$O(^ORD(101.41,"AB","PSO SUPPLY",0)) S DLG="PSO SUPPLY"<br> . I ORIT=$O(^ORD(101.41,"AB","PSO OERR",0)) S DLG="PSO OERR"<br> . I ORIT=$O(^ORD(101.41,"AB","PSJ OR PAT OE",0)) S DLG="PSJ OR PAT OE"<br> I DLG="PSO OERR"!(DLG="PSO SUPPLY") S ORCAT="O" I $G(OREVENT("EFFECTIVE")) D<br> . S ORDIALOG($O(^ORD(101.41,"B","OR GTX START DATE"_$S($G(ORWP94):"/TIME",1:""),0)),1)=OREVENT("EFFECTIVE")<br> I DLG="PSJ OR PAT OE" S ORCAT="I"<br> I DLG="PSJ OR CLINIC OE" S ORCAT="I"<br> I DLG="CLINIC OR PAT FLUID OE" S ORCAT="I"<br> S:DLG="FHW1" ORCAT="I" S:DLG?1"FHW "2.7U1" MEAL" ORCAT="O"<br> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br> I ORDG=$O(^ORD(100.98,"B","LAB",0)) D  ;use section<br> . N OI,SUB S OI=+$G(ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1))<br> . S SUB=$P($G(^ORD(101.43,OI,"LR")),U,6),ORDG=$$DGRP^ORMLR(SUB)<br> K:'ORDG ORDG K:'ORIT ORIT ; Dgrp & Quick must be non-zero<br> M ORCHECK=ORDIALOG("ORCHECK") K ORDIALOG("ORCHECK")<br> S ORDIALOG=$O(^ORD(101.41,"AB",DLG,0))<br> I 'ORDIALOG S ORDIALOG=$O(^ORD(101.41,"B",DLG,0))<br> I $D(ORDIALOG("ORLEAD")) S ORLEAD=ORDIALOG("ORLEAD")<br> I $D(ORDIALOG("ORTRAIL")) S ORTRAIL=ORDIALOG("ORTRAIL")<br> D GETDLG1^ORCD(ORDIALOG)<br> I $L(ORCATFN) S ORCAT=ORCATFN<br> I $G(ORWP94) D<br> . N SIGPRMT S SIGPRMT=$O(^ORD(101.41,"B","OR GTX SIG",0))<br> . N INSPRMT S INSPRMT=$O(^ORD(101.41,"B","OR GTX INSTRUCTIONS",0))<br> . I $L($G(ORDIALOG(SIGPRMT,1))) S ORDIALOG(INSPRMT,"FORMAT")="@"<br> . I ORCAT="O" S ORPKG=$O(^DIC(9.4,"C","PSO",0))<br> . I ORCAT="I" S ORPKG=$O(^DIC(9.4,"C","PSJ",0))<br> S ORSRC=$G(ORSRC)<br> D DELPI^ORWDX1 ;delete empty PI<br> I $G(ORIFN)="" D  ; new order<br> . D EN^ORCSAVE<br> . S REC="" I ORIFN D GETBYIFN^ORWORR(.REC,ORIFN)<br> . I '$D(^TMP("ORECALL",$J,ORDIALOG)) M ^TMP("ORECALL",$J,ORDIALOG)=ORDIALOG<br> E  D<br> . N OR0<br> . S OR0=$G(^OR(100,+ORIFN,0)),ORSTS=$P($G(^(3)),U,3),ORDG=$P(OR0,U,11)<br> . I $L($P(OR0,U,17)),ORSTS=10 S OREVENT=$P(OR0,U,17),OREVENT("TS")=$P(OR0,U,13)<br> . D XX^ORCSAVE ; edit order<br> . S REC="" S ORIFN=+ORIFN_";"_ORDA D GETBYIFN^ORWORR(.REC,ORIFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}