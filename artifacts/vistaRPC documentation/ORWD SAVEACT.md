---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD SAVEACT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD SAVEACT{:/}
 tag | {::nomarkdown}SAVEACT{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Saves the action on a order in an unsigned/unreleased state.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVEACT^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}ORIFN, ACTION, REASON, DFN, ORNP, LOC{:/}
 First comment | {::nomarkdown}<pre> Save this action for the order (it is still unsigned/unreleased)</pre>{:/}
 Code | {::nomarkdown}  N ORDIALOG,ORL,ORVP,ORDUZ,ORSTS,ORDG,OREVENT,ACTDA,SIGSTS,RELSTS,ASTS<br> S ORVP=DFN_";DPT(",ORL(2)=LOC_";SC("<br> S SIGSTS=2,RELSTS=11<br> I '$P(ORIFN,";",2) S $P(ORIFN,";",2)=1<br> I (ACTION="FL")!(ACTION="UF")!(ACTION="WC") S SIGSTS=3,RELSTS=""<br> S ASTS=$P(^OR(100,+ORIFN,8,+$P(ORIFN,";",2),0),U,15)<br> I ACTION="DC",((ASTS=10)!(ASTS=11)) D  Q       ; exit here if DELETE<br> . D GETBYIFN^ORWORR(.LST,ORIFN)<br> . S $P(LST(1),U,1)="~0",LST(2)="tDELETED - "_$E(LST(2),2,245)<br> . D CANCEL^ORCSAVE2(ORIFN)<br> I $P(ORIFN,";",2)>1 S $ECODE=",Uorder action invalid," Q<br> I ACTION="FL" S $P(^OR(100,+ORIFN,6),U,1)=1<br> I ACTION="UF" S $P(^OR(100,+ORIFN,6),U,1)=0<br> I ACTION'="RN" D<br> . S ACTDA=$$ACTION^ORCSAVE(ACTION,+ORIFN,ORNP,REASON)<br> I ACTION="RN" D<br> . N ORDA,ORDIALOG,PRMT,SAVIFN,X0<br> . S SAVIFN=+ORIFN,X0=^OR(100,+ORIFN,0)<br> . I $P(X0,U,5)["101.41," D                        ; version 3<br> . . S ORDIALOG=+$P(X0,U,5),ORCAT=$P(^OR(100,+ORIFN,0),U,12)<br> . . D GETDLG^ORCD(ORDIALOG),GETORDER^ORCD(+ORIFN)<br> . E  D                                            ; version 2.5 generic<br> . . S ORDIALOG=$O(^ORD(101.41,"B","OR GXTEXT WORD PROCESSING ORDE",0))<br> . . D GETDLG^ORCD(ORDIALOG)<br> . . S PRMT=$O(^ORD(101.41,"B","OR GTX WORD PROCESSING 1",0))<br> . . S ORDIALOG(PRMT,1)=$NA(^TMP("ORWORD",$J,PRMT,1))<br> . . M ^TMP("ORWORD",$J,PRMT,1)=^OR(100,+ORIFN,1)<br> . . S PRMT=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))<br> . . I $P(X0,U,9) S ORDIALOG(PRMT,1)=$P(X0,U,9)<br> . D RN^ORCSAVE I 'ORIFN S $ECODE=",UCPRS renew order,"<br> . S ACTDA=ORDA,ORIFN=SAVIFN<br> I (ACTION="FL")!(ACTION="UF") S ACTDA=1<br> D GETBYIFN^ORWORR(.LST,+ORIFN_";"_ACTDA)<br> S $P(LST(1),U,12)=ACTDA<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}