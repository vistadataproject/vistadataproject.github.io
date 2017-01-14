---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQXQA USER 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQXQA USER{:/}
 tag | {::nomarkdown}USER{:/}
 routine | [ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns notifications for current user.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the user (DUZ) from the New Person File (#200).{:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The start date of the period to retrieve notifications for the user in Fileman format.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}The stop date of the period to retrieve notifications for the user inFileman format.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | USER^[ORQQXQA](http://code.osehra.org/dox/Routine_ORQQXQA_source.html)
 Method comment | return current user's notifications across all patients
 Code | ```  N STRTDATE,STOPDATE S STRTDATE="",STOPDATE=""
 D USER^XQALERT("^TMP(""ORB"",$J)",DUZ,STRTDATE,STOPDATE)
 N I,J,INFO,ORX,URG,ORN,ORNAME,ORPT,ORPTN,SORT,SVAL,TVAL,SVAL2,TVAL2
 N MSG,NODE,ORT,ORTOT,INVDT
 S NODE="",TVAL="",TVAL2=""
 D SORT^ORQORB(.SORT) S SORT=$S($L($G(SORT)):SORT,1:"P") ;sort method
 S ORTOT=^TMP("ORB",$J)
 F I=1:1:ORTOT S ORX=$P(^TMP("ORB",$J,I),U,2) I $P(ORX,";")["OR" D
 .S ORN=$P($P(ORX,";"),",",3) ;type of notification (ien)
 .S ORPT=$P($P(ORX,";"),",",2) ;DFN
 .S INVDT=9999999-$P(ORX,";",3) ;reverse d/t
 .D URGENCY^ORQORB(.URG,ORN) S URG=$S($G(URG)>0:URG,1:2) ;urgency of notification type
 .S ORNAME=$P(^ORD(100.9,ORN,0),U) ;name of notification type (external)
 .S ORPTN=$$LOWER^VALM1($P(^DPT(ORPT,0),U)) ;change patient's name to mixed case
 .S INFO=$P(^TMP("ORB",$J,I),"  ")
 .S MSG=$S(INFO="I":INFO,1:" ")_" "_$P($P(^TMP("ORB",$J,I),U),"):",2)
 .;sorting
 .I SORT="U" S SVAL=URG_U_ORPTN_U_ORNAME ;by urgency
 .I SORT="T" S SVAL=ORNAME_U_ORPTN ;by type
 .I SORT="P" S SVAL=ORPTN_U_URG_U_ORNAME ;by patient
 .;below is set to:  XQAID^  notification name^DFN^date/time
 .S ^TMP("ORB2",$J,SVAL_U_INVDT)=ORX_U_"  "_MSG_U_ORPT_U_$P(ORX,";",3)
 S J=0
 F  S NODE=$O(^TMP("ORB2",$J,NODE)) Q:NODE=""  S J=J+1 D
 .S SVAL=$P(NODE,U),SVAL2=$P(NODE,U,2)
 .;set sorting heading
 .I TVAL'=SVAL D
 ..S ORY(J)=U_$S(SORT="U":$S(SVAL=1:"HIGH",SVAL=3:"LOW",1:"MODERATE"),1:SVAL)_":",TVAL=SVAL,TVAL2="",J=J+1
 .I SORT'="P",TVAL2'=SVAL2 S ORY(J)=U_"  "_SVAL2,TVAL2=SVAL2,J=J+1
 .;set to alert information to return
 .S ORY(J)=^TMP("ORB2",$J,NODE)
 I J=0 S ORY(1)="^No notifications found."
 K ^TMP("ORB",$J),^TMP("ORB2",$J)```




 Generated on January 14th 2017, 7:26:35 am