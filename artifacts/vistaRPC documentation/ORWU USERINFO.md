---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU USERINFO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU USERINFO{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns preferences for the current user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Relevant info for current user
 Lines | ```
 N X,ORRPL,ORRPL1,ORRPL2,ORTAB,CORTABS,RPTTAB,ORDT,OREFF,OREXP,ORDATEOK
 S REC=DUZ_U_$P(^VA(200,DUZ,0),U)
 S $P(REC,U,3)=$S($D(^XUSEC("ORES",DUZ)):3,$D(^XUSEC("ORELSE",DUZ)):2,$D(^XUSEC("OREMAS",DUZ)):1,1:0)
 S $P(REC,U,4)=$D(^XUSEC("ORES",DUZ))&$D(^XUSEC("PROVIDER",DUZ))
 S $P(REC,U,5)=$D(^XUSEC("PROVIDER",DUZ))
 S $P(REC,U,6)=$$ORDROLE
 S $P(REC,U,7)=$$GET^XPAR("USR^SYS^PKG","ORWOR DISABLE ORDERING",1,"I")
 S $P(REC,U,8)=$$GET^XPAR("USR^SYS","ORWOR TIMEOUT CHART",1,"I")
 I '$P(REC,U,8),$G(DTIME) S $P(REC,U,8)=DTIME
 S $P(REC,U,9)=$$GET^XPAR("USR^SYS^PKG","ORWOR TIMEOUT COUNTDOWN",1,"I")
 S X=$$GET^XPAR("USR^SYS^PKG","ORWOR ENABLE VERIFY",1,"I")
 S $P(REC,U,10)=$S(X=1:1,X=2:0,1:'$P(REC,U,7))
 S $P(REC,U,11)=$$GET^XPAR("USR^SYS^PKG","ORWOR BROADCAST MESSAGES",1,"I")
 S $P(REC,U,12)=$$GET^XPAR("USR^SYS^PKG","ORWOR AUTO CLOSE PT MSG",1,"I")
 S $P(REC,U,13)=$$KSP^XUPARAM("WHERE")  ; domain
 S $P(REC,U,14)=+$G(^VA(200,DUZ,5))     ; service/section
 S $P(REC,U,15)=$$GET^XPAR("USR^SYS^PKG","ORWOR AUTOSAVE NOTE",1,"I")
 S $P(REC,U,16)=$$GET^XPAR("USR^DIV^SYS^PKG","ORCH INITIAL TAB",1,"I")
 S $P(REC,U,17)=$$GET^XPAR("USR^DIV^SYS^PKG","ORCH USE LAST TAB",1,"I")
 S $P(REC,U,18)=$$GET^XPAR("USR^DIV^SYS^PKG","ORWOR DISABLE WEB ACCESS",1,"I")
 S $P(REC,U,19)=$$GET^XPAR("SYS^PKG","ORWOR DISABLE HOLD ORDERS",1,"I")
 S ORRPL=$G(^VA(200,DUZ,101))           ; RPL node.
 S ORRPL1=$P(ORRPL,U)
 S $P(REC,U,20)=ORRPL1                  ; ISRPL piece.
 S ORRPL2=$P(ORRPL,U,2)
 S $P(REC,U,21)=ORRPL2                  ; RPLLIST piece.
 S ORDT=DT                              ; Today.
 S (CORTABS,RPTTAB)=0
 S ORRPL=0
 F  S ORRPL=$O(^VA(200,DUZ,"ORD",ORRPL)) Q:ORRPL<1  D
 .S ORTAB=$G(^VA(200,DUZ,"ORD",ORRPL,0))
 .I ORTAB="" Q
 .S OREFF=$P(ORTAB,U,2)
 .S OREXP=$P(ORTAB,U,3)
 .S ORTAB=$P(ORTAB,U)
 .I ORTAB="" Q
 .S ORTAB=$G(^ORD(101.13,ORTAB,0))
 .I ORTAB="" Q
 .S ORTAB=$P(ORTAB,U)
 .I ORTAB="" Q
 .S ORTAB=$$UP^XLFSTR(ORTAB)
 .S ORDATEOK=1                             ; Default.
 .I ((OREFF="")!(OREFF>ORDT)) S ORDATEOK=0 ; Eff. date NG.
 .I ORDATEOK  D
 ..I OREXP="" Q                            ; No exp. date.
 ..I (OREXP<ORDT) S ORDATEOK=0             ; Exp. date NG.
 ..I (OREXP=ORDT) S ORDATEOK=0             ; Exp. date NG.
 .;
 .; Set TRUE if OK:
 .I ((ORTAB="COR")&(ORDATEOK)) S CORTABS=1
 .I ((ORTAB="RPT")&(ORDATEOK)) S RPTTAB=1
 S $P(REC,U,22)=CORTABS                 ; "Core" tabs.
 S $P(REC,U,23)=RPTTAB                  ; "Reports" tab.
 S $P(REC,U,24)=$P($$SITE^VASITE,U,3)
 S $P(REC,U,25)=$$GET^XPAR("USR^TEA","PXRM GEC STATUS CHECK",1,"I")
 S $P(REC,U,26)=$$PROD^XUPROD```
 Leading comment lines | {::nomarkdown}return DUZ^NAME^USRCLS^CANSIGN^ISPROVIDER^ORDERROLE^NOORDER^DTIME^<br/>COUNTDOWN^ENABLEVERIFY^NOTIFYAPPS^MSGHANG^DOMAIN^SERVICE^<br/>AUTOSAVE^INITTAB^LASTTAB^WEBACCESS^ALLOWHOLD^ISRPL^RPLLIST^<br/>CORTABS^RPTTAB^STANUM^GECSTATUS^PRODACCT{:/}




 Generated on January 13th 2017, 6:55:28 am