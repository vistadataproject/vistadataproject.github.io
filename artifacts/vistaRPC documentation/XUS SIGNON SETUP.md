---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS SIGNON SETUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS SIGNON SETUP{:/}
 tag | {::nomarkdown}SETUP{:/}
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Establishes environment necessary for DHCP sign-on{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SETUP^[XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 Method comment | RPC. XUS SIGNON SETUP - IA #1632 (API IA #4054)
 Input parameters | {::nomarkdown}XWBUSRNM, ASOSKIP, D2{:/}
 First comment | {::nomarkdown}<pre>sets up environment for GUI signon</pre>{:/}
 Code | {::nomarkdown}  N X1 K DUZ<br> S XWBUSRNM=$G(XWBUSRNM),ASOSKIP=$G(ASOSKIP)<br> I $L($G(XWBTIP)) S IO("IP")=XWBTIP<br> S IO("CLNM")=$$LOW^XLFSTR($G(XWBCLMAN)) D ZIO^%ZIS4<br> D SET1^XUS(0),SET^XWBSEC("XUS XOPT",XOPT) ;p265<br> D SAVE^XUS1 ;save the home device<br> S RET(0)=$P(XUENV,U,3),RET(1)=$P(XUVOL,U),RET(2)=XUCI<br> S RET(3)=$I,RET(4)=$P(XOPT,U,2),RET(5)=0<br> S RET(6)=$G(^XMB("NETNAME")) ;DBIA #1131<br> S RET(7)=$$PROD^XUPROD ;Tell if production.<br> S X1=$$INHIBIT() I X1 S XWBERR=$S(X1=1:"Logons Inhibited",1:"Max Users") Q  ;p523<br> I (+XWBUSRNM<-30),$$CHKUSER^XUSBSE1(XWBUSRNM) S RET(5)=1 D POST2 Q  ;p523 BSE CHANGE<br> I $G(ASOSKIP) S XQXFLG("ASO")=1 ;Skip the ASO check, Not for VISITORS p523<br> I $G(XWBVER)<1.1 S XQXFLG("ZEBRA")=-1 ;Disable for v1.0<br> I $L(IO("CLNM")),'$G(DUZ) S DUZ=$$AUTOXWB^XUS1B() ;Only check when 1.1 CL.<br> I $G(DUZ)>0 D  ;p523<br> . I '$D(XUSER(0)),DUZ D USER^XUS(DUZ)<br> . N %T S %T=$$USER^XUS1A I %T S DUZ=0 Q<br> . D NOW,POST2 S RET(5)=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}