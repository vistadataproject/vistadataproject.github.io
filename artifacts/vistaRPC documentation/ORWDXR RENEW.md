---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR RENEW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR RENEW{:/}
 tag | {::nomarkdown}RENEW{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Renew an existing order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RENEW^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Renew an order
 Input parameters | {::nomarkdown}ORIFN, ORVP, ORNP, ORL, FLDS, CPLX, ORAPPT{:/}
 Code | {::nomarkdown}  N ORDG<br> N ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG,ORPKG<br> N ORDIALOG,PRMT,X0<br> N FSTDOSE,FST<br> S ORDUZ=$G(FLDS("ORDUZ"))<br> S (FSTDOSE,FST)=0<br> I '$D(CPLX) S CPLX=0<br> I '$G(ORAPPT) S ORAPPT=""<br> S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)<br> S X0=^OR(100,+ORIFN,0)<br> S ORDG=$P(X0,U,11)<br> S ORTS=$P(X0,U,13) ; 409 - Transfer Treating Specialty<br> S ORPKG=$P(X0,U,14)<br> I $D(FLDS("ORCHECK")) M ORCHECK=FLDS("ORCHECK")<br> I $P(X0,U,5)["101.41," D                        ; version 3<br> . S ORDIALOG=+$P(X0,U,5),ORCAT=$P(^OR(100,+ORIFN,0),U,12)<br> . D GETDLG^ORCD(ORDIALOG),GETORDER^ORCD(+ORIFN)<br> . I CPLX S FSTDOSE=$P($G(ORDIALOG("B","FIRST DOSE")),U,2) S:'FSTDOSE FSTDOSE=$$PTR^ORCD("OR GTX NOW")<br> . I FSTDOSE,$G(ORDIALOG(FSTDOSE,1)) K ORDIALOG(FSTDOSE,1)<br> E  D                                            ; version 2.5 generic<br> . S ORDIALOG=$O(^ORD(101.41,"B","OR GXTEXT WORD PROCESSING ORDE",0))<br> . D GETDLG^ORCD(ORDIALOG)<br> . S PRMT=$O(^ORD(101.41,"B","OR GTX WORD PROCESSING 1",0))<br> . S ORDIALOG(PRMT,1)=$NA(^TMP("ORWORD",$J,PRMT,1))<br> . M ^TMP("ORWORD",$J,PRMT,1)=^OR(100,+ORIFN,1)<br> . S PRMT=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))<br> . I $P(X0,U,9) S ORDIALOG(PRMT,1)=$P(X0,U,9)<br> I +FLDS(1)=999 D  ; generic order<br> . S ORDIALOG($$PTR^ORCD("OR GTX START DATE/TIME"),1)=$P(FLDS(1),U,2)<br> . S ORDIALOG($$PTR^ORCD("OR GTX STOP DATE/TIME"),1)=$P(FLDS(1),U,3)<br> I ($O(^ORD(101.41,"AB","PS MEDS",0))>0),(+FLDS(1)=130)!(+FLDS(1)=135)!(+FLDS(1)=140),'$L($G(ORDIALOG($$PTR^ORCD("OR GTX SIG"),1))) D<br> . N ORDOSE,ORDRUG,ORCAT,ORWPSOI,PROMPT,DRUG<br> . S ORCAT=$P($G(^OR(100,+ORIFN,0)),U,12)<br> . S PROMPT=$$PTR^ORCD("OR GTX INSTRUCTIONS")<br> . S ORDRUG=$G(ORDIALOG($$PTR^ORCD("OR GTX DISPENSE DRUG"),1))<br> . S ORWPSOI=+$G(ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1))<br> . I ORWPSOI S ORWPSOI=+$P($G(^ORD(101.43,+ORWPSOI,0)),U,2)<br> . D DOSE^PSSORUTL(.ORDOSE,ORWPSOI,$S(ORCAT="I":"U",1:"O"),ORVP)       ; dflt doses<br> . D D1^ORCDPS2  ; set up ORDOSE<br> . S DRUG=$G(ORDOSE("DD",+ORDRUG))<br> . I DRUG,ORCAT="O" D RESETID^ORCDPS<br> . D SIG^ORCDPS2<br> I +FLDS(1)=140 D  ; outpatient meds<br> . K ORDIALOG($$PTR^ORCD("OR GTX START DATE"),1) ; remove effective dt<br> . S ORDIALOG($$PTR^ORCD("OR GTX REFILLS"),1)=$P(FLDS(1),U,4)<br> . S ORDIALOG($$PTR^ORCD("OR GTX ROUTING"),1)=$P(FLDS(1),U,5)<br> . S PRMT=$$PTR^ORCD("OR GTX WORD PROCESSING 1")<br> . K ^TMP("ORWORD",$J,PRMT,1)<br> . S I=1 F  S I=$O(FLDS(I)) Q:'I  S ^TMP("ORWORD",$J,PRMT,1,I-1,0)=FLDS(I)<br> . S ^TMP("ORWORD",$J,PRMT,1,0)=U_U_(I-1)_U_(I-1)_U_DT_U<br> . S ORDIALOG(PRMT,1)=$NA(^TMP("ORWORD",$J,PRMT,1))<br> . N SIG,PI,X S SIG=$$PTR^ORCD("OR GTX SIG")<br> . S PI=$$PTR^ORCD("OR GTX PATIENT INSTRUCTIONS"),X=$$STR(PI)<br> . I $L(X),$$STR(SIG)[X S ORDIALOG(PI,"FORMAT")="@" ;PI in Sig<br> D RN^ORCSAVE<br> S REC="" S ORIFN=+ORIFN_";"_ORDA D GETBYIFN^ORWORR(.REC,ORIFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}