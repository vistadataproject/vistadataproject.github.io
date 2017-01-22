---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 OISLCT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 OISLCT{:/}
 tag | {::nomarkdown}OISLCT{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | OISLCT^[ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 Method comment | return for defaults for pharmacy orderable item
 Input parameters | {::nomarkdown}OI, PSTYPE, ORVP, NEEDPI, PKIACTIV{:/}
 Code | {::nomarkdown}  I $D(NEEDPI),(NEEDPI="Y"),$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")) D  ;check if bug for Supply, Clin Med/IV for NEEDPI<br> .N ORQOIEN S ORQOIEN=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM",0))<br> .N ORQOI S ORQOI=$O(^ORD(101.41,$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")),6,"D",ORQOIEN,0)) Q:'ORQOI<br> .N ORQOOI S ORQOOI=$G(^ORD(101.41,$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")),6,ORQOI,1)) Q:'ORQOOI<br> .I +OI=+ORQOOI D  ;make sure QO orderable is the same as the orderable here<br> ..N ORQOPIDA S ORQOPIDA=$O(^ORD(101.41,"B","OR GTX PATIENT INSTRUCTIONS",0))<br> ..I '$D(^ORD(101.41,$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")),6,"D",ORQOPIDA)) S NEEDPI="N"<br> K ^TMP($J,"ORWDX LOADRSP","QO SAVE")<br> N ILST,ORDOSE,ORWPSOI,ORWDOSES,X1,X2<br> K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J),^TMP("PSSDIN",$J)<br> S ILST=0<br> S ORWPSOI=0<br> S:+OI ORWPSOI=+$P($G(^ORD(101.43,+OI,0)),U,2)<br> D START^PSSJORDF(ORWPSOI,$S(PSTYPE="U":"I",1:"O")) ; dflt route, schedule, etc.<br> I '$L($T(DOSE^PSSOPKI1)) D DOSE^PSSORUTL(.ORDOSE,ORWPSOI,PSTYPE,ORVP)       ; dflt doses<br> I $L($T(DOSE^PSSOPKI1)) D DOSE^PSSOPKI1(.ORDOSE,ORWPSOI,PSTYPE,ORVP)       ; dflt doses NEW PKI CODE from pharmacy<br> D EN^PSSDIN(ORWPSOI)                               ; nfi text<br> S ILST=ILST+1,LST(ILST)="~Medication"<br> S ILST=ILST+1,LST(ILST)="d"_OI_U_$S(+OI:$P(^ORD(101.43,OI,0),U),1:"")<br> S ILST=ILST+1,LST(ILST)="~Verb"<br> S ILST=ILST+1,LST(ILST)="d"_$P($G(ORDOSE("MISC")),U)<br> S ILST=ILST+1,LST(ILST)="~Preposition"<br> S ILST=ILST+1,LST(ILST)="d"_$P($G(ORDOSE("MISC")),U,2)<br> I $D(NEEDPI),(NEEDPI="Y") S ILST=ILST+1,LST(ILST)="~PtInstr" D PTINSTR<br> S ILST=ILST+1,LST(ILST)="~AllDoses"  D ALLDOSE ; must do before DOSAGE<br> S ILST=ILST+1,LST(ILST)="~Dosage"    D DOSAGE<br> S ILST=ILST+1,LST(ILST)="~Dispense"  D DISPLST<br> S ILST=ILST+1,LST(ILST)="~Route"     D ROUTE<br> S ILST=ILST+1,LST(ILST)="~Schedule"  D SCHED<br> S ILST=ILST+1,LST(ILST)="~Guideline" D GUIDE<br> S ILST=ILST+1,LST(ILST)="~Message"   D OIMSG<br> S ILST=ILST+1,LST(ILST)="~DEASchedule" ;PKI<br> S ILST=ILST+1,LST(ILST)="d" ;PKI<br> I $D(ORDOSE("DEA")) S X="",X1=$P(ORDOSE("DEA"),";"),X2=$P(ORDOSE("DEA"),";",2) D<br> . I '$L(X2) Q<br> . I $G(PKIACTIV)="Y" S X=X2<br> S LST(ILST)=LST(ILST)_X<br> I PSTYPE="U" D<br> . ; start, expires, next admin<br> I PSTYPE="O" D<br> . ; days supply, quantity, refills<br> K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J),^TMP("PSSDIN",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fODMedNVA.pas">Orders/fODMedNVA.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}