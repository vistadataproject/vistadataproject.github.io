---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB FASTUSER 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB FASTUSER{:/}
 tag | {::nomarkdown}FASTUSER{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Function returns notifications for current user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return current user's notifications across all patients
 Lines | ```
 N STRTDATE,STOPDATE,ORTOT,I,ORURG,URG,ORN,SORT,ORN0,URGLIST,REMLIST,REM,NONORLST,NONOR
 N ALRT,ALRTDT,ALRTPT,ALRTMSG,ALRTI,ALRTLOC,ALRTXQA,J,FWDBY,PRE,ALRTDFN
 K ^TMP("ORBG",$J)
 S STRTDATE="",STOPDATE="",FWDBY="Forwarded by: "
 D GETUSER1^XQALDATA("^TMP(""ORB"",$J)",DUZ,STRTDATE,STOPDATE)
 S ORTOT=^TMP("ORB",$J)
 D URGLIST^ORQORB(.URGLIST)
 D REMLIST^ORQORB(.REMLIST)
 D REMNONOR^ORQORB(.NONORLST)
 S J=0
 F I=1:1:ORTOT D
 .S REM=""
 .S ALRTDFN=""
 .S ALRT=^TMP("ORB",$J,I)
 .S PRE=$E(ALRT,1,1)
 .S ALRTXQA=$P(ALRT,U,2)  ;XQAID
 .S NONOR="" F  S NONOR=$O(NONORLST(NONOR)) Q:NONOR=""  D
 ..I ALRTXQA[NONOR S REM=1  ;allow this type of alert to be Removed
 .S ALRTMSG=$P($P(ALRT,U),PRE_"  ",2)
 .I $E(ALRT,4,8)'="-----" D  ;not forwarded alert info/comment
 ..S ORURG="n/a"
 ..S ALRTI=$P(ALRT,"  ")
 ..S ALRTPT=""
 ..S ALRTLOC=""
 ..I $E($P(ALRTXQA,";"),1,3)="TIU" S ORURG="Moderate"
 ..I $P(ALRTXQA,",")="OR" D
 ...S ORN=$P($P(ALRTXQA,";"),",",3)
 ...S URG=$G(URGLIST(ORN))
 ...S ORURG=$S(URG=1:"HIGH",URG=2:"Moderate",1:"low")
 ...S REM=$G(REMLIST(ORN))
 ...S ORN0=^ORD(100.9,ORN,0)
 ...S ALRTI=$S($P(ORN0,U,6)="INFODEL":"I",1:"")
 ...S ALRTDFN=$P(ALRTXQA,",",2)
 ...S ALRTLOC=$G(^DPT(+$G(ALRTDFN),.1))
 ..S ALRTI=$S(ALRTI="I":"I",1:"")
 ..I (ALRT["): ")!($G(ORN)=27&(ALRT[") CV")) D  ;WAT
 ...S ALRTPT=$P(ALRT,": ")
 ...S ALRTPT=$E(ALRTPT,4,$L(ALRTPT))
 ...I $G(ORN)=27&(ALRT[") CV") S ALRTMSG=$P($P(ALRT,U),": ",2) ;WAT
 ...E  S ALRTMSG=$P($P(ALRT,U),"): ",2) ;WAT
 ...I $E(ALRTMSG,1,1)="[" D
 ....S:'$L(ALRTLOC) ALRTLOC=$P($P(ALRTMSG,"]"),"[",2)
 ....S ALRTMSG=$P(ALRTMSG,"] ",2)
 ..I '$L($G(ALRTPT)) S ALRTPT="no patient"
 ..S ALRTDT=$P(ALRTXQA,";",3)
 ..S ALRTDT=$P(ALRTDT,".")_"."_$E($P(ALRTDT,".",2)_"0000",1,4)
 ..S ALRTDT=$E(ALRTDT,4,5)_"/"_$E(ALRTDT,6,7)_"/"_($E(ALRTDT,1,3)+1700)_"@"_$E($P(ALRTDT,".",2),1,2)_":"_$E($P(ALRTDT,".",2),3,4)
 ..;S ALRTDT=($E(ALRTDT,1,3)+1700)_"/"_$E(ALRTDT,4,5)_"/"_$E(ALRTDT,6,7)_"@"_$E($P(ALRTDT,".",2),1,2)_":"_$E($P(ALRTDT,".",2),3,4)
 ..S J=J+1,^TMP("ORBG",$J,J)=ALRTI_U_ALRTPT_U_ALRTLOC_U_ORURG_U_ALRTDT_U
 ..S ^TMP("ORBG",$J,J)=^TMP("ORBG",$J,J)_ALRTMSG_U_U_ALRTXQA_U_$G(REM)_U
 .;
 .;if alert forward info/comment:
 .I $E(ALRTMSG,1,5)="-----" D
 ..S ALRTMSG=$P(ALRTMSG,"-----",2)
 ..I $E(ALRTMSG,1,14)=FWDBY D
 ...S J=J+1,^TMP("ORBG",$J,J)=FWDBY_U_$P($P(ALRTMSG,FWDBY,2),"Generated: ")_$P($P(ALRTMSG,FWDBY,2),"Generated: ",2)
 ..E  S ^TMP("ORBG",$J,J)=^TMP("ORBG",$J,J)_U_""""_ALRTMSG_""""
 S ^TMP("ORBG",$J)=""
 S ORY=$NA(^TMP("ORBG",$J))```




 Generated on January 13th 2017, 6:55:29 am