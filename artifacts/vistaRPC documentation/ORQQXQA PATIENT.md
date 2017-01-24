---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQXQA PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXQA PATIENT{:/}
 tag | {::nomarkdown}PATIENT{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of notifications for a patient for the current user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient from the Patient File (#2).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date for retrieving patient notifications in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date for retrieving patient notifications in Fileman format.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PATIENT^[ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 Method comment | return current user's notifications for patient ORPT
 Input parameters | {::nomarkdown}ORPT{:/}
 Code | {::nomarkdown}  Q:'$L($G(ORPT))<br> N STRTDATE,STOPDATE S STRTDATE="",STOPDATE=""<br> D USER^XQALERT("^TMP(""ORB"",$J)",DUZ,STRTDATE,STOPDATE)<br> N I,J,INFO,ORX,URG,ORN,ORPTN,SORT,SVAL,TVAL,MSG,ORNAME,INVDT,PT,NODE,ORT<br> N ORTOT<br> S ORTOT=^TMP("ORB",$J)<br> S J=0,NODE="",TVAL=""<br> F I=1:1:ORTOT S ORX=$P(^TMP("ORB",$J,I),U,2) I ($P(ORX,";")["OR"),($P(ORX,",",2)=ORPT) D<br> .S ORN=$P($P(ORX,";"),",",3)<br> .S INVDT=9999999-$P(ORX,";",3)<br> .D SORT^ORQORB(.SORT) S SORT=$S($L($G(SORT)):SORT,1:"P") ;sort method<br> .I SORT'="P" D <br> ..D URGENCY^ORQORB(.URG,ORN) S URG=$S($G(URG)>0:URG,1:2)<br> ..S ORNAME=$P(^ORD(100.9,ORN,0),U)<br> .S INFO=$P(^TMP("ORB",$J,I),"  ")<br> .S MSG=$S(INFO="I":INFO,1:" ")_" "_$P($P(^TMP("ORB",$J,I),U),"):",2)<br> .I SORT="U" S SVAL=URG_U_ORNAME<br> .I SORT="T" S SVAL=ORNAME<br> .I SORT="P" S SVAL=""<br> .S ^TMP("ORB2",$J,SVAL_U_INVDT)=ORX_U_MSG_U_ORPT_U_$P(ORX,";",3)<br> F  S NODE=$O(^TMP("ORB2",$J,NODE)) Q:NODE=""  S J=J+1 D<br> .S SVAL=$P(NODE,U)<br> .I SORT'="P",(TVAL'=SVAL) D<br> ..S ORY(J)=U_$S(SORT="U":$S(SVAL=1:"HIGH",SVAL=3:"LOW",1:"MODERATE"),1:SVAL)_":",TVAL=SVAL,J=J+1<br> .S ORY(J)=^TMP("ORB2",$J,NODE)<br> I J=0 S ORY(1)="^No notifications found."<br> K ^TMP("ORB",$J),^TMP("ORB2",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}