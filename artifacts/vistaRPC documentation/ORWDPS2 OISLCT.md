---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 OISLCT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 OISLCT{:/}
 tag | {::nomarkdown}OISLCT{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return for defaults for pharmacy orderable item
 Input Parameters | {::nomarkdown}OI<br/>PSTYPE<br/>ORVP<br/>NEEDPI<br/>PKIACTIV{:/}
 Lines | ```
 I $D(NEEDPI),(NEEDPI="Y"),$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")) D  ;check if bug for Supply, Clin Med/IV for NEEDPI
 .N ORQOIEN S ORQOIEN=$O(^ORD(101.41,"B","OR GTX ORDERABLE ITEM",0))
 .N ORQOI S ORQOI=$O(^ORD(101.41,$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")),6,"D",ORQOIEN,0)) Q:'ORQOI
 .N ORQOOI S ORQOOI=$G(^ORD(101.41,$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")),6,ORQOI,1)) Q:'ORQOOI
 .I +OI=+ORQOOI D  ;make sure QO orderable is the same as the orderable here
 ..N ORQOPIDA S ORQOPIDA=$O(^ORD(101.41,"B","OR GTX PATIENT INSTRUCTIONS",0))
 ..I '$D(^ORD(101.41,$G(^TMP($J,"ORWDX LOADRSP","QO SAVE")),6,"D",ORQOPIDA)) S NEEDPI="N"
 K ^TMP($J,"ORWDX LOADRSP","QO SAVE")
 N ILST,ORDOSE,ORWPSOI,ORWDOSES,X1,X2
 K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J),^TMP("PSSDIN",$J)
 S ILST=0
 S ORWPSOI=0
 S:+OI ORWPSOI=+$P($G(^ORD(101.43,+OI,0)),U,2)
 D START^PSSJORDF(ORWPSOI,$S(PSTYPE="U":"I",1:"O")) ; dflt route, schedule, etc.
 I '$L($T(DOSE^PSSOPKI1)) D DOSE^PSSORUTL(.ORDOSE,ORWPSOI,PSTYPE,ORVP)       ; dflt doses
 I $L($T(DOSE^PSSOPKI1)) D DOSE^PSSOPKI1(.ORDOSE,ORWPSOI,PSTYPE,ORVP)       ; dflt doses NEW PKI CODE from pharmacy
 D EN^PSSDIN(ORWPSOI)                               ; nfi text
 S ILST=ILST+1,LST(ILST)="~Medication"
 S ILST=ILST+1,LST(ILST)="d"_OI_U_$S(+OI:$P(^ORD(101.43,OI,0),U),1:"")
 S ILST=ILST+1,LST(ILST)="~Verb"
 S ILST=ILST+1,LST(ILST)="d"_$P($G(ORDOSE("MISC")),U)
 S ILST=ILST+1,LST(ILST)="~Preposition"
 S ILST=ILST+1,LST(ILST)="d"_$P($G(ORDOSE("MISC")),U,2)
 I $D(NEEDPI),(NEEDPI="Y") S ILST=ILST+1,LST(ILST)="~PtInstr" D PTINSTR
 S ILST=ILST+1,LST(ILST)="~AllDoses"  D ALLDOSE ; must do before DOSAGE
 S ILST=ILST+1,LST(ILST)="~Dosage"    D DOSAGE
 S ILST=ILST+1,LST(ILST)="~Dispense"  D DISPLST
 S ILST=ILST+1,LST(ILST)="~Route"     D ROUTE
 S ILST=ILST+1,LST(ILST)="~Schedule"  D SCHED
 S ILST=ILST+1,LST(ILST)="~Guideline" D GUIDE
 S ILST=ILST+1,LST(ILST)="~Message"   D OIMSG
 S ILST=ILST+1,LST(ILST)="~DEASchedule" ;PKI
 S ILST=ILST+1,LST(ILST)="d" ;PKI
 I $D(ORDOSE("DEA")) S X="",X1=$P(ORDOSE("DEA"),";"),X2=$P(ORDOSE("DEA"),";",2) D
 . I '$L(X2) Q
 . I $G(PKIACTIV)="Y" S X=X2
 S LST(ILST)=LST(ILST)_X
 I PSTYPE="U" D
 . ; start, expires, next admin
 I PSTYPE="O" D
 . ; days supply, quantity, refills
 K ^TMP("PSJINS",$J),^TMP("PSJMR",$J),^TMP("PSJNOUN",$J),^TMP("PSJSCH",$J),^TMP("PSSDIN",$J)```




 Generated on January 13th 2017, 6:55:29 am