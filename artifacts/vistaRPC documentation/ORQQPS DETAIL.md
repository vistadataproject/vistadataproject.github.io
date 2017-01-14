---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPS DETAIL 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPS DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a medication order.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from Patient file [#2].{:/} | 
| {::nomarkdown}MEDICATION ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Medication identifier as drawn from the medication consdensed list (ORQQPSLIST).  The first piece of the condensed list.  E.g. 31945R;O, 231156U;I,944382P;O{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 Method comment | return detailed information for a drug
 Input parameters | {::nomarkdown}ORPT<br/>ORMED{:/}
 Code | ```  K ^TMP("PS",$J)<br/> D OEL^PSOORRL(ORPT,ORMED)<br/> N I,J,CR,X,Z,ZZ,MDR,SCH,SIG,COM,ADD,SOL,ORDATE,TYPE<br/> S I=0,J=1,CR=$CHAR(13),ORDATE=""<br/> S TYPE=$P(ORMED,";",2)<br/> S X=$G(^TMP("PS",$J,0))<br/> I '$L($G(X)) S ORY(J)="No detailed information found." Q<br/> S ORY(J)="     "_$P(X,U)<br/> I +$G(^TMP("PS",$J,"MDR",0))>0 D<br/> .S ZZ=^TMP("PS",$J,"MDR",0) F Z=1:1:ZZ D<br/> ..I Z=1 S MDR=^TMP("PS",$J,"MDR",Z,0)<br/> ..E  S MDR=MDR_", "_^TMP("PS",$J,"MDR",Z,0)<br/> I $L($G(MDR)) S ORY(J)=ORY(J)_"  "_MDR<br/> S ORY(J)=ORY(J)_"  "_$P(X,U,2)<br/> I +$G(^TMP("PS",$J,"SCH",0))>0 D<br/> .S ZZ=^TMP("PS",$J,"SCH",0) F Z=1:1:ZZ D<br/> ..I Z=1 S SCH=$P(^TMP("PS",$J,"SCH",Z,0),U)<br/> ..E  S SCH=SCH_", "_$P(^TMP("PS",$J,"SCH",Z,0),U)<br/> I $L($G(SCH)) S ORY(J)=ORY(J)_"  "_SCH<br/> S ORY(J)=ORY(J),J=J+1<br/> I +$G(^TMP("PS",$J,"SIG",0))>0 D<br/> .S ZZ=^TMP("PS",$J,"SIG",0) F Z=1:1:ZZ D<br/> ..I Z=1 S SIG=^TMP("PS",$J,"SIG",Z,0)<br/> ..E  S SIG=SIG_", "_^TMP("PS",$J,"SIG",Z,0)<br/> I $L($G(SIG)) S ORY(J)="        "_SIG,J=J+1<br/> S ORY(J)=" ",J=J+1<br/> I +$G(^TMP("PS",$J,"B",0))>0 D<br/> .S ZZ=^TMP("PS",$J,"B",0) F Z=1:1:ZZ D<br/> ..S SOL=^TMP("PS",$J,"B",Z,0),ORY(J)="        "_$P(SOL,U)_" "_$P(SOL,U,2),J=J+1<br/> I +$G(^TMP("PS",$J,"A",0))>0 D<br/> .S ZZ=^TMP("PS",$J,"A",0) F Z=1:1:ZZ D<br/> ..S ADD=^TMP("PS",$J,"A",Z,0)<br/> ..S ORY(J)="        "_$P(ADD,U)<br/> ..S IVX=$P(ADD,U,2)<br/> ..S ORY(J)=ORY(J)_$S($D(IVX):" "_IVX,1:"")_" "_$P(ADD,U,3),J=J+1<br/> I $L($G(SOL))!($L($G(ADD))) S ORY(J)=" ",J=J+1<br/> S ORY(J)="           Status: "_$P(X,U,6),J=J+1<br/> S ORDATE=$P(X,U,5) I $L($G(ORDATE)) D<br/> .D DT^DILF("ET",ORDATE,.ORDATE,"","")<br/> S ORY(J)="       Start date: "_$G(ORDATE(0)),J=J+1<br/> S ORDATE=$P(X,U,3) I $L($G(ORDATE)) D<br/> .D DT^DILF("ET",ORDATE,.ORDATE,"","")<br/> S ORY(J)="        Stop date: "_$G(ORDATE(0)),J=J+1<br/> I TYPE="O" D  ; if outpatient med<br/> .S ORY(J)="Refills remaining: "_$P(X,U,4),J=J+1<br/> .S ORY(J)="      Days supply: "_$P(X,U,7),J=J+1<br/> .S ORY(J)="         Quantity: "_$P(X,U,8),J=J+1<br/> .S ORY(J)=" ",J=J+1<br/> S ORY(J)="Comments:",J=J+1<br/> S I=0 F  S I=$O(^TMP("PS",$J,"PC",I)) Q:'I  D<br/> .S ORY(J)=^TMP("PS",$J,"PC",I,0),J=J+1<br/> K ^TMP("PS",$J)<br/>```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}