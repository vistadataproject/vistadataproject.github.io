---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; XUS AV CODE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}XUS AV CODE{:/}
 tag | {::nomarkdown}VALIDAV{:/}
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This API checks if a ACCESS/VERIFY code pair is valid.It returns an array of values R(0)=DUZ if sign-on was OK, zero if not OK.R(1)=(0=OK, 1,2...=Can't sign-on for some reason).R(2)=verify needs changing.R(3)=Message.R(4)=0R(5)=count of the number of lines of text, zero if none.R(5+n)=message text.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}AVCODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}accessCode_\;\_verifyCode in unencrypted form.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VALIDAV^[XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 Method comment | RPC. XUS CVC - IA #6296
 First comment | {::nomarkdown}Check a users access<br/>Return R(0)=DUZ, R(1)=(0=OK, 1,2...=Can't sign-on for some reason)<br/>R(2)=verify needs changing, R(3)=Message, R(4)=0, R(5)=msg cnt, R(5+n)<br/>R(R(5)+6)=# div user must select from, R(R(5)+6+n)=div{:/}
 Input parameters | {::nomarkdown}AVCODE{:/}
 Code | ```  N X,XUSER,XUNOW,XUDEV,XUM,XUMSG,%1,VCCH K DUZ
 S U="^",RET(0)=0,RET(5)=0,XUF=$G(XUF,0),XUM=0,XUMSG=0,XUDEV=0
 S DUZ=0,DUZ(0)="",VCCH=0 D NOW
 S XOPT=$$STATE^XWBSEC("XUS XOPT")
 S XUMSG=$$INHIBIT() I XUMSG S XUM=1 G VAX ;Logon inhibited
 I $$LKCHECK^XUSTZIP($G(IO("IP"))) S XUMSG=7 G VAX ;IP locked
 I $L(AVCODE) D
 . I $E(AVCODE,1,2)="~1" S DUZ=$$CHKASH^XUSRB4(AVCODE),DUZ("AUTHENTICATION")="ASHTOKEN" Q
 . I $E(AVCODE,1,2)="~2" S DUZ=$$CHKCCOW^XUSRB4(AVCODE),DUZ("AUTHENTICATION")="CCOWTOKEN" Q
 . S DUZ=$$CHECKAV^XUS($$DECRYP^XUSRB1(AVCODE)),DUZ("AUTHENTICATION")="AVCODES"
 . Q
 I DUZ'>0,$$FAIL^XUS3 D  G VAX
 . S XUM=1,XUMSG=7,X=$$RA^XUSTZ H 5 ;3 Strikes
 S XUMSG=$$UVALID^XUS() G:XUMSG VAX ;Check User
 S VCCH=$$VCVALID() ;Check VC
 I $G(DUZ("LOA"))="" S DUZ("LOA")=2
 I DUZ>0 S XUMSG=$$POST(1)
 I XUMSG>0 S DUZ=0,VCCH=0 ;If can't sign-on, don't tell need to change VC
 I 'XUMSG,VCCH S XUMSG=12 D SET^XWBSEC("XUS DUZ",DUZ) ;Need to change VC```




 Generated on January 14th 2017, 7:26:35 am