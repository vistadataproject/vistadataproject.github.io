---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR RENEW 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR RENEW{:/}
 tag | {::nomarkdown}RENEW{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Renew an existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Renew an order
 Input Parameters | {::nomarkdown}ORIFN<br/>ORVP<br/>ORNP<br/>ORL<br/>FLDS<br/>CPLX<br/>ORAPPT{:/}
 Lines | ```
 N ORDG
 N ORDUZ,ORSTS,OREVENT,ORCAT,ORDA,ORTS,ORNEW,ORCHECK,ORLOG,ORPKG
 N ORDIALOG,PRMT,X0
 N FSTDOSE,FST
 S ORDUZ=$G(FLDS("ORDUZ"))
 S (FSTDOSE,FST)=0
 I '$D(CPLX) S CPLX=0
 I '$G(ORAPPT) S ORAPPT=""
 S ORVP=ORVP_";DPT(",ORL(2)=ORL_";SC(",ORL=ORL(2)
 S X0=^OR(100,+ORIFN,0)
 S ORDG=$P(X0,U,11)
 S ORTS=$P(X0,U,13) ; 409 - Transfer Treating Specialty
 S ORPKG=$P(X0,U,14)
 I $D(FLDS("ORCHECK")) M ORCHECK=FLDS("ORCHECK")
 I $P(X0,U,5)["101.41," D                        ; version 3
 . S ORDIALOG=+$P(X0,U,5),ORCAT=$P(^OR(100,+ORIFN,0),U,12)
 . D GETDLG^ORCD(ORDIALOG),GETORDER^ORCD(+ORIFN)
 . I CPLX S FSTDOSE=$P($G(ORDIALOG("B","FIRST DOSE")),U,2) S:'FSTDOSE FSTDOSE=$$PTR^ORCD("OR GTX NOW")
 . I FSTDOSE,$G(ORDIALOG(FSTDOSE,1)) K ORDIALOG(FSTDOSE,1)
 E  D                                            ; version 2.5 generic
 . S ORDIALOG=$O(^ORD(101.41,"B","OR GXTEXT WORD PROCESSING ORDE",0))
 . D GETDLG^ORCD(ORDIALOG)
 . S PRMT=$O(^ORD(101.41,"B","OR GTX WORD PROCESSING 1",0))
 . S ORDIALOG(PRMT,1)=$NA(^TMP("ORWORD",$J,PRMT,1))
 . M ^TMP("ORWORD",$J,PRMT,1)=^OR(100,+ORIFN,1)
 . S PRMT=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))
 . I $P(X0,U,9) S ORDIALOG(PRMT,1)=$P(X0,U,9)
 I +FLDS(1)=999 D  ; generic order
 . S ORDIALOG($$PTR^ORCD("OR GTX START DATE/TIME"),1)=$P(FLDS(1),U,2)
 . S ORDIALOG($$PTR^ORCD("OR GTX STOP DATE/TIME"),1)=$P(FLDS(1),U,3)
 I ($O(^ORD(101.41,"AB","PS MEDS",0))>0),(+FLDS(1)=130)!(+FLDS(1)=135)!(+FLDS(1)=140),'$L($G(ORDIALOG($$PTR^ORCD("OR GTX SIG"),1))) D
 . N ORDOSE,ORDRUG,ORCAT,ORWPSOI,PROMPT,DRUG
 . S ORCAT=$P($G(^OR(100,+ORIFN,0)),U,12)
 . S PROMPT=$$PTR^ORCD("OR GTX INSTRUCTIONS")
 . S ORDRUG=$G(ORDIALOG($$PTR^ORCD("OR GTX DISPENSE DRUG"),1))
 . S ORWPSOI=+$G(ORDIALOG($$PTR^ORCD("OR GTX ORDERABLE ITEM"),1))
 . I ORWPSOI S ORWPSOI=+$P($G(^ORD(101.43,+ORWPSOI,0)),U,2)
 . D DOSE^PSSORUTL(.ORDOSE,ORWPSOI,$S(ORCAT="I":"U",1:"O"),ORVP)       ; dflt doses
 . D D1^ORCDPS2  ; set up ORDOSE
 . S DRUG=$G(ORDOSE("DD",+ORDRUG))
 . I DRUG,ORCAT="O" D RESETID^ORCDPS
 . D SIG^ORCDPS2
 I +FLDS(1)=140 D  ; outpatient meds
 . K ORDIALOG($$PTR^ORCD("OR GTX START DATE"),1) ; remove effective dt
 . S ORDIALOG($$PTR^ORCD("OR GTX REFILLS"),1)=$P(FLDS(1),U,4)
 . S ORDIALOG($$PTR^ORCD("OR GTX ROUTING"),1)=$P(FLDS(1),U,5)
 . S PRMT=$$PTR^ORCD("OR GTX WORD PROCESSING 1")
 . K ^TMP("ORWORD",$J,PRMT,1)
 . S I=1 F  S I=$O(FLDS(I)) Q:'I  S ^TMP("ORWORD",$J,PRMT,1,I-1,0)=FLDS(I)
 . S ^TMP("ORWORD",$J,PRMT,1,0)=U_U_(I-1)_U_(I-1)_U_DT_U
 . S ORDIALOG(PRMT,1)=$NA(^TMP("ORWORD",$J,PRMT,1))
 . N SIG,PI,X S SIG=$$PTR^ORCD("OR GTX SIG")
 . S PI=$$PTR^ORCD("OR GTX PATIENT INSTRUCTIONS"),X=$$STR(PI)
 . I $L(X),$$STR(SIG)[X S ORDIALOG(PI,"FORMAT")="@" ;PI in Sig
 D RN^ORCSAVE
 S REC="" S ORIFN=+ORIFN_";"_ORDA D GETBYIFN^ORWORR(.REC,ORIFN)```




 Generated on January 13th 2017, 6:55:29 am