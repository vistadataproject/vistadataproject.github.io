---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQXQA USER
# ORQQXQA USER

Function returns notifications for current user.

Property | Value
--- | ---
Label | USER
Routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER ID | LITERAL | 16 | true | The record number of the user (DUZ) from the New Person File (#200).
START DATE | LITERAL | 16 |  | The start date of the period to retrieve notifications for the user in Fileman format.
STOP DATE | LITERAL | 16 |  | The stop date of the period to retrieve notifications for the user inFileman format.



### MUMPS Method Description

Property | Value
--- | ---
Method | [USER^ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
Method Comment | return current user&#x27;s notifications across all patients
Code | {::nomarkdown}<pre><code> N STRTDATE,STOPDATE S STRTDATE="",STOPDATE=""<br/> D USER^XQALERT("^TMP(""ORB"",$J)",DUZ,STRTDATE,STOPDATE)<br/> N I,J,INFO,ORX,URG,ORN,ORNAME,ORPT,ORPTN,SORT,SVAL,TVAL,SVAL2,TVAL2<br/> N MSG,NODE,ORT,ORTOT,INVDT<br/> S NODE="",TVAL="",TVAL2=""<br/> D SORT^ORQORB(.SORT) S SORT=$S($L($G(SORT)):SORT,1:"P") ;sort method<br/> S ORTOT=^TMP("ORB",$J)<br/> F I=1:1:ORTOT S ORX=$P(^TMP("ORB",$J,I),U,2) I $P(ORX,";")["OR" D<br/> .S ORN=$P($P(ORX,";"),",",3) ;type of notification (ien)<br/> .S ORPT=$P($P(ORX,";"),",",2) ;DFN<br/> .S INVDT=9999999-$P(ORX,";",3) ;reverse d/t<br/> .D URGENCY^ORQORB(.URG,ORN) S URG=$S($G(URG)>0:URG,1:2) ;urgency of notification type<br/> .S ORNAME=$P(^ORD(100.9,ORN,0),U) ;name of notification type (external)<br/> .S ORPTN=$$LOWER^VALM1($P(^DPT(ORPT,0),U)) ;change patient's name to mixed case<br/> .S INFO=$P(^TMP("ORB",$J,I),"  ")<br/> .S MSG=$S(INFO="I":INFO,1:" ")_" "_$P($P(^TMP("ORB",$J,I),U),"):",2)<br/> .;sorting<br/> .I SORT="U" S SVAL=URG_U_ORPTN_U_ORNAME ;by urgency<br/> .I SORT="T" S SVAL=ORNAME_U_ORPTN ;by type<br/> .I SORT="P" S SVAL=ORPTN_U_URG_U_ORNAME ;by patient<br/> .;below is set to:  XQAID^  notification name^DFN^date/time<br/> .S ^TMP("ORB2",$J,SVAL_U_INVDT)=ORX_U_"  "_MSG_U_ORPT_U_$P(ORX,";",3)<br/> S J=0<br/> F  S NODE=$O(^TMP("ORB2",$J,NODE)) Q:NODE=""  S J=J+1 D<br/> .S SVAL=$P(NODE,U),SVAL2=$P(NODE,U,2)<br/> .;set sorting heading<br/> .I TVAL'=SVAL D<br/> ..S ORY(J)=U_$S(SORT="U":$S(SVAL=1:"HIGH",SVAL=3:"LOW",1:"MODERATE"),1:SVAL)_":",TVAL=SVAL,TVAL2="",J=J+1<br/> .I SORT'="P",TVAL2'=SVAL2 S ORY(J)=U_"  "_SVAL2,TVAL2=SVAL2,J=J+1<br/> .;set to alert information to return<br/> .S ORY(J)=^TMP("ORB2",$J,NODE)<br/> I J=0 S ORY(1)="^No notifications found."<br/> K ^TMP("ORB",$J),^TMP("ORB2",$J)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}