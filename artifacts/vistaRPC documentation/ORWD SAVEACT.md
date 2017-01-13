---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD SAVEACT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD SAVEACT{:/}
 tag | {::nomarkdown}SAVEACT{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Saves the action on a order in an unsigned/unreleased state.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}ORIFN<br/>ACTION<br/>REASON<br/>DFN<br/>ORNP<br/>LOC{:/}
 Lines | ```
 N ORDIALOG,ORL,ORVP,ORDUZ,ORSTS,ORDG,OREVENT,ACTDA,SIGSTS,RELSTS,ASTS
 S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC("
 S SIGSTS=2,RELSTS=11
 I '$P(ORIFN,";",2) S $P(ORIFN,";",2)=1
 I (ACTION="FL")!(ACTION="UF")!(ACTION="WC") S SIGSTS=3,RELSTS=""
 S ASTS=$P(^OR(100,+ORIFN,8,+$P(ORIFN,";",2),0),U,15)
 I ACTION="DC",((ASTS=10)!(ASTS=11)) D  Q       ; exit here if DELETE
 . D GETBYIFN^ORWORR(.LST,ORIFN)
 . S $P(LST(1),U,1)="~0",LST(2)="tDELETED - "_$E(LST(2),2,245)
 . D CANCEL^ORCSAVE2(ORIFN)
 I $P(ORIFN,";",2)>1 S $ECODE=",Uorder action invalid," Q
 I ACTION="FL" S $P(^OR(100,+ORIFN,6),U,1)=1
 I ACTION="UF" S $P(^OR(100,+ORIFN,6),U,1)=0
 I ACTION'="RN" D
 . S ACTDA=$$ACTION^ORCSAVE(ACTION,+ORIFN,ORNP,REASON)
 I ACTION="RN" D
 . N ORDA,ORDIALOG,PRMT,SAVIFN,X0
 . S SAVIFN=+ORIFN,X0=^OR(100,+ORIFN,0)
 . I $P(X0,U,5)["101.41," D                        ; version 3
 . . S ORDIALOG=+$P(X0,U,5),ORCAT=$P(^OR(100,+ORIFN,0),U,12)
 . . D GETDLG^ORCD(ORDIALOG),GETORDER^ORCD(+ORIFN)
 . E  D                                            ; version 2.5 generic
 . . S ORDIALOG=$O(^ORD(101.41,"B","OR GXTEXT WORD PROCESSING ORDE",0))
 . . D GETDLG^ORCD(ORDIALOG)
 . . S PRMT=$O(^ORD(101.41,"B","OR GTX WORD PROCESSING 1",0))
 . . S ORDIALOG(PRMT,1)=$NA(^TMP("ORWORD",$J,PRMT,1))
 . . M ^TMP("ORWORD",$J,PRMT,1)=^OR(100,+ORIFN,1)
 . . S PRMT=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))
 . . I $P(X0,U,9) S ORDIALOG(PRMT,1)=$P(X0,U,9)
 . D RN^ORCSAVE I 'ORIFN S $ECODE=",UCPRS renew order,"
 . S ACTDA=ORDA,ORIFN=SAVIFN
 I (ACTION="FL")!(ACTION="UF") S ACTDA=1
 D GETBYIFN^ORWORR(.LST,+ORIFN_";"_ACTDA)
 S $P(LST(1),U,12)=ACTDA
```
 Leading comment lines | {::nomarkdown}Save this action for the order (it is still unsigned/unreleased){:/}




 Generated on January 13th 2017, 6:55:28 am