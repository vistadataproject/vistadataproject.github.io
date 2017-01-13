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
 Lines | {::nomarkdown} N X,ORRPL,ORRPL1,ORRPL2,ORTAB,CORTABS,RPTTAB,ORDT,OREFF,OREXP,ORDATEOK<br/> S REC=DUZ_U_$P(^VA(200,DUZ,0),U)<br/> S $P(REC,U,3)=$S($D(^XUSEC("ORES",DUZ)):3,$D(^XUSEC("ORELSE",DUZ)):2,$D(^XUSEC("OREMAS",DUZ)):1,1:0)<br/> S $P(REC,U,4)=$D(^XUSEC("ORES",DUZ))&$D(^XUSEC("PROVIDER",DUZ))<br/> S $P(REC,U,5)=$D(^XUSEC("PROVIDER",DUZ))<br/> S $P(REC,U,6)=$$ORDROLE<br/> S $P(REC,U,7)=$$GET^XPAR("USR^SYS^PKG","ORWOR DISABLE ORDERING",1,"I")<br/> S $P(REC,U,8)=$$GET^XPAR("USR^SYS","ORWOR TIMEOUT CHART",1,"I")<br/> I '$P(REC,U,8),$G(DTIME) S $P(REC,U,8)=DTIME<br/> S $P(REC,U,9)=$$GET^XPAR("USR^SYS^PKG","ORWOR TIMEOUT COUNTDOWN",1,"I")<br/> S X=$$GET^XPAR("USR^SYS^PKG","ORWOR ENABLE VERIFY",1,"I")<br/> S $P(REC,U,10)=$S(X=1:1,X=2:0,1:'$P(REC,U,7))<br/> S $P(REC,U,11)=$$GET^XPAR("USR^SYS^PKG","ORWOR BROADCAST MESSAGES",1,"I")<br/> S $P(REC,U,12)=$$GET^XPAR("USR^SYS^PKG","ORWOR AUTO CLOSE PT MSG",1,"I")<br/> S $P(REC,U,13)=$$KSP^XUPARAM("WHERE")  ; domain<br/> S $P(REC,U,14)=+$G(^VA(200,DUZ,5))     ; service/section<br/> S $P(REC,U,15)=$$GET^XPAR("USR^SYS^PKG","ORWOR AUTOSAVE NOTE",1,"I")<br/> S $P(REC,U,16)=$$GET^XPAR("USR^DIV^SYS^PKG","ORCH INITIAL TAB",1,"I")<br/> S $P(REC,U,17)=$$GET^XPAR("USR^DIV^SYS^PKG","ORCH USE LAST TAB",1,"I")<br/> S $P(REC,U,18)=$$GET^XPAR("USR^DIV^SYS^PKG","ORWOR DISABLE WEB ACCESS",1,"I")<br/> S $P(REC,U,19)=$$GET^XPAR("SYS^PKG","ORWOR DISABLE HOLD ORDERS",1,"I")<br/> S ORRPL=$G(^VA(200,DUZ,101))           ; RPL node.<br/> S ORRPL1=$P(ORRPL,U)<br/> S $P(REC,U,20)=ORRPL1                  ; ISRPL piece.<br/> S ORRPL2=$P(ORRPL,U,2)<br/> S $P(REC,U,21)=ORRPL2                  ; RPLLIST piece.<br/> S ORDT=DT                              ; Today.<br/> S (CORTABS,RPTTAB)=0<br/> S ORRPL=0<br/> F  S ORRPL=$O(^VA(200,DUZ,"ORD",ORRPL)) Q:ORRPL<1  D<br/> .S ORTAB=$G(^VA(200,DUZ,"ORD",ORRPL,0))<br/> .I ORTAB="" Q<br/> .S OREFF=$P(ORTAB,U,2)<br/> .S OREXP=$P(ORTAB,U,3)<br/> .S ORTAB=$P(ORTAB,U)<br/> .I ORTAB="" Q<br/> .S ORTAB=$G(^ORD(101.13,ORTAB,0))<br/> .I ORTAB="" Q<br/> .S ORTAB=$P(ORTAB,U)<br/> .I ORTAB="" Q<br/> .S ORTAB=$$UP^XLFSTR(ORTAB)<br/> .S ORDATEOK=1                             ; Default.<br/> .I ((OREFF="")!(OREFF>ORDT)) S ORDATEOK=0 ; Eff. date NG.<br/> .I ORDATEOK  D<br/> ..I OREXP="" Q                            ; No exp. date.<br/> ..I (OREXP<ORDT) S ORDATEOK=0             ; Exp. date NG.<br/> ..I (OREXP=ORDT) S ORDATEOK=0             ; Exp. date NG.<br/> .;<br/> .; Set TRUE if OK:<br/> .I ((ORTAB="COR")&(ORDATEOK)) S CORTABS=1<br/> .I ((ORTAB="RPT")&(ORDATEOK)) S RPTTAB=1<br/> S $P(REC,U,22)=CORTABS                 ; "Core" tabs.<br/> S $P(REC,U,23)=RPTTAB                  ; "Reports" tab.<br/> S $P(REC,U,24)=$P($$SITE^VASITE,U,3)<br/> S $P(REC,U,25)=$$GET^XPAR("USR^TEA","PXRM GEC STATUS CHECK",1,"I")<br/> S $P(REC,U,26)=$$PROD^XUPROD{:/}
 Leading comment lines | {::nomarkdown}return DUZ^NAME^USRCLS^CANSIGN^ISPROVIDER^ORDERROLE^NOORDER^DTIME^<br/>COUNTDOWN^ENABLEVERIFY^NOTIFYAPPS^MSGHANG^DOMAIN^SERVICE^<br/>AUTOSAVE^INITTAB^LASTTAB^WEBACCESS^ALLOWHOLD^ISRPL^RPLLIST^<br/>CORTABS^RPTTAB^STANUM^GECSTATUS^PRODACCT{:/}




 Generated on January 13th 2017, 7:15:27 am