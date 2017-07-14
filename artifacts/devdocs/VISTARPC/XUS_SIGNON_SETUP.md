---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS SIGNON SETUP<br/>
# XUS SIGNON SETUP

Establishes environment necessary for DHCP sign-on

## Properties

Property | Value
--- | ---
Label | SETUP
Routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SETUP^XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Method Comment | RPC. XUS SIGNON SETUP - IA #1632 (API IA #4054)
Input Parameters | XWBUSRNM, ASOSKIP, D2
First Comment | {::nomarkdown}<pre><code>sets up environment for GUI signon</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N X1 K DUZ<br/> S XWBUSRNM=$G(XWBUSRNM),ASOSKIP=$G(ASOSKIP)<br/> I $L($G(XWBTIP)) S IO("IP")=XWBTIP<br/> S IO("CLNM")=$$LOW^XLFSTR($G(XWBCLMAN)) D ZIO^%ZIS4<br/> D SET1^XUS(0),SET^XWBSEC("XUS XOPT",XOPT) ;p265<br/> D SAVE^XUS1 ;save the home device<br/> S RET(0)=$P(XUENV,U,3),RET(1)=$P(XUVOL,U),RET(2)=XUCI<br/> S RET(3)=$I,RET(4)=$P(XOPT,U,2),RET(5)=0<br/> S RET(6)=$G(^XMB("NETNAME")) ;DBIA #1131<br/> S RET(7)=$$PROD^XUPROD ;Tell if production.<br/> S X1=$$INHIBIT() I X1 S XWBERR=$S(X1=1:"Logons Inhibited",1:"Max Users") Q  ;p523<br/> I (+XWBUSRNM<-30),$$CHKUSER^XUSBSE1(XWBUSRNM) S RET(5)=1 D POST2 Q  ;p523 BSE CHANGE<br/> I $G(ASOSKIP) S XQXFLG("ASO")=1 ;Skip the ASO check, Not for VISITORS p523<br/> I $G(XWBVER)<1.1 S XQXFLG("ZEBRA")=-1 ;Disable for v1.0<br/> I $L(IO("CLNM")),'$G(DUZ) S DUZ=$$AUTOXWB^XUS1B() ;Only check when 1.1 CL.<br/> I $G(DUZ)>0 D  ;p523<br/> . I '$D(XUSER(0)),DUZ D USER^XUS(DUZ)<br/> . N %T S %T=$$USER^XUS1A I %T S DUZ=0 Q<br/> . D NOW,POST2 S RET(5)=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}