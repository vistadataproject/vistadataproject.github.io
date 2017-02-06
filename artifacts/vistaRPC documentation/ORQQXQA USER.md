---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQXQA USER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXQA USER{:/}
 tag | {::nomarkdown}USER{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns notifications for current user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the user (DUZ) from the New Person File (#200).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The start date of the period to retrieve notifications for the user in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The stop date of the period to retrieve notifications for the user inFileman format.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | USER^[ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 Method comment | return current user's notifications across all patients
 Code | {::nomarkdown}  N STRTDATE,STOPDATE S STRTDATE="",STOPDATE=""<br> D USER^XQALERT("^TMP(""ORB"",$J)",DUZ,STRTDATE,STOPDATE)<br> N I,J,INFO,ORX,URG,ORN,ORNAME,ORPT,ORPTN,SORT,SVAL,TVAL,SVAL2,TVAL2<br> N MSG,NODE,ORT,ORTOT,INVDT<br> S NODE="",TVAL="",TVAL2=""<br> D SORT^ORQORB(.SORT) S SORT=$S($L($G(SORT)):SORT,1:"P") ;sort method<br> S ORTOT=^TMP("ORB",$J)<br> F I=1:1:ORTOT S ORX=$P(^TMP("ORB",$J,I),U,2) I $P(ORX,";")["OR" D<br> .S ORN=$P($P(ORX,";"),",",3) ;type of notification (ien)<br> .S ORPT=$P($P(ORX,";"),",",2) ;DFN<br> .S INVDT=9999999-$P(ORX,";",3) ;reverse d/t<br> .D URGENCY^ORQORB(.URG,ORN) S URG=$S($G(URG)>0:URG,1:2) ;urgency of notification type<br> .S ORNAME=$P(^ORD(100.9,ORN,0),U) ;name of notification type (external)<br> .S ORPTN=$$LOWER^VALM1($P(^DPT(ORPT,0),U)) ;change patient's name to mixed case<br> .S INFO=$P(^TMP("ORB",$J,I),"  ")<br> .S MSG=$S(INFO="I":INFO,1:" ")_" "_$P($P(^TMP("ORB",$J,I),U),"):",2)<br> .;sorting<br> .I SORT="U" S SVAL=URG_U_ORPTN_U_ORNAME ;by urgency<br> .I SORT="T" S SVAL=ORNAME_U_ORPTN ;by type<br> .I SORT="P" S SVAL=ORPTN_U_URG_U_ORNAME ;by patient<br> .;below is set to:  XQAID^  notification name^DFN^date/time<br> .S ^TMP("ORB2",$J,SVAL_U_INVDT)=ORX_U_"  "_MSG_U_ORPT_U_$P(ORX,";",3)<br> S J=0<br> F  S NODE=$O(^TMP("ORB2",$J,NODE)) Q:NODE=""  S J=J+1 D<br> .S SVAL=$P(NODE,U),SVAL2=$P(NODE,U,2)<br> .;set sorting heading<br> .I TVAL'=SVAL D<br> ..S ORY(J)=U_$S(SORT="U":$S(SVAL=1:"HIGH",SVAL=3:"LOW",1:"MODERATE"),1:SVAL)_":",TVAL=SVAL,TVAL2="",J=J+1<br> .I SORT'="P",TVAL2'=SVAL2 S ORY(J)=U_"  "_SVAL2,TVAL2=SVAL2,J=J+1<br> .;set to alert information to return<br> .S ORY(J)=^TMP("ORB2",$J,NODE)<br> I J=0 S ORY(1)="^No notifications found."<br> K ^TMP("ORB",$J),^TMP("ORB2",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}