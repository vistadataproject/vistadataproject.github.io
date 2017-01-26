---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB FASTUSER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB FASTUSER{:/}
 tag | {::nomarkdown}FASTUSER{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Function returns notifications for current user.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FASTUSER^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | return current user's notifications across all patients
 Code | {::nomarkdown}  N STRTDATE,STOPDATE,ORTOT,I,ORURG,URG,ORN,SORT,ORN0,URGLIST,REMLIST,REM,NONORLST,NONOR<br> N ALRT,ALRTDT,ALRTPT,ALRTMSG,ALRTI,ALRTLOC,ALRTXQA,J,FWDBY,PRE,ALRTDFN<br> K ^TMP("ORBG",$J)<br> S STRTDATE="",STOPDATE="",FWDBY="Forwarded by: "<br> D GETUSER1^XQALDATA("^TMP(""ORB"",$J)",DUZ,STRTDATE,STOPDATE)<br> S ORTOT=^TMP("ORB",$J)<br> D URGLIST^ORQORB(.URGLIST)<br> D REMLIST^ORQORB(.REMLIST)<br> D REMNONOR^ORQORB(.NONORLST)<br> S J=0<br> F I=1:1:ORTOT D<br> .S REM=""<br> .S ALRTDFN=""<br> .S ALRT=^TMP("ORB",$J,I)<br> .S PRE=$E(ALRT,1,1)<br> .S ALRTXQA=$P(ALRT,U,2)  ;XQAID<br> .S NONOR="" F  S NONOR=$O(NONORLST(NONOR)) Q:NONOR=""  D<br> ..I ALRTXQA[NONOR S REM=1  ;allow this type of alert to be Removed<br> .S ALRTMSG=$P($P(ALRT,U),PRE_"  ",2)<br> .I $E(ALRT,4,8)'="-----" D  ;not forwarded alert info/comment<br> ..S ORURG="n/a"<br> ..S ALRTI=$P(ALRT,"  ")<br> ..S ALRTPT=""<br> ..S ALRTLOC=""<br> ..I $E($P(ALRTXQA,";"),1,3)="TIU" S ORURG="Moderate"<br> ..I $P(ALRTXQA,",")="OR" D<br> ...S ORN=$P($P(ALRTXQA,";"),",",3)<br> ...S URG=$G(URGLIST(ORN))<br> ...S ORURG=$S(URG=1:"HIGH",URG=2:"Moderate",1:"low")<br> ...S REM=$G(REMLIST(ORN))<br> ...S ORN0=^ORD(100.9,ORN,0)<br> ...S ALRTI=$S($P(ORN0,U,6)="INFODEL":"I",1:"")<br> ...S ALRTDFN=$P(ALRTXQA,",",2)<br> ...S ALRTLOC=$G(^DPT(+$G(ALRTDFN),.1))<br> ..S ALRTI=$S(ALRTI="I":"I",1:"")<br> ..I (ALRT["): ")!($G(ORN)=27&(ALRT[") CV")) D  ;WAT<br> ...S ALRTPT=$P(ALRT,": ")<br> ...S ALRTPT=$E(ALRTPT,4,$L(ALRTPT))<br> ...I $G(ORN)=27&(ALRT[") CV") S ALRTMSG=$P($P(ALRT,U),": ",2) ;WAT<br> ...E  S ALRTMSG=$P($P(ALRT,U),"): ",2) ;WAT<br> ...I $E(ALRTMSG,1,1)="[" D<br> ....S:'$L(ALRTLOC) ALRTLOC=$P($P(ALRTMSG,"]"),"[",2)<br> ....S ALRTMSG=$P(ALRTMSG,"] ",2)<br> ..I '$L($G(ALRTPT)) S ALRTPT="no patient"<br> ..S ALRTDT=$P(ALRTXQA,";",3)<br> ..S ALRTDT=$P(ALRTDT,".")_"."_$E($P(ALRTDT,".",2)_"0000",1,4)<br> ..S ALRTDT=$E(ALRTDT,4,5)_"/"_$E(ALRTDT,6,7)_"/"_($E(ALRTDT,1,3)+1700)_"@"_$E($P(ALRTDT,".",2),1,2)_":"_$E($P(ALRTDT,".",2),3,4)<br> ..;S ALRTDT=($E(ALRTDT,1,3)+1700)_"/"_$E(ALRTDT,4,5)_"/"_$E(ALRTDT,6,7)_"@"_$E($P(ALRTDT,".",2),1,2)_":"_$E($P(ALRTDT,".",2),3,4)<br> ..S J=J+1,^TMP("ORBG",$J,J)=ALRTI_U_ALRTPT_U_ALRTLOC_U_ORURG_U_ALRTDT_U<br> ..S ^TMP("ORBG",$J,J)=^TMP("ORBG",$J,J)_ALRTMSG_U_U_ALRTXQA_U_$G(REM)_U<br> .;<br> .;if alert forward info/comment:<br> .I $E(ALRTMSG,1,5)="-----" D<br> ..S ALRTMSG=$P(ALRTMSG,"-----",2)<br> ..I $E(ALRTMSG,1,14)=FWDBY D<br> ...S J=J+1,^TMP("ORBG",$J,J)=FWDBY_U_$P($P(ALRTMSG,FWDBY,2),"Generated: ")_$P($P(ALRTMSG,FWDBY,2),"Generated: ",2)<br> ..E  S ^TMP("ORBG",$J,J)=^TMP("ORBG",$J,J)_U_""""_ALRTMSG_""""<br> S ^TMP("ORBG",$J)=""<br> S ORY=$NA(^TMP("ORBG",$J)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}