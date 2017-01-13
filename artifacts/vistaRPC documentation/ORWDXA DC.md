---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA DC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA DC{:/}
 tag | {::nomarkdown}DC{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to discontinue, cancel, or delete an existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Discontinue/Cancel/Delete order
 Input Parameters | {::nomarkdown}ORID<br/>ORNP<br/>ORL<br/>REASON<br/>DCORIG<br/>ISNEWORD{:/}
 Lines | ```
 N NATURE,CREATE,PRINT,STATUS,ACTDA,SIGSTS
 N X3,X8,CURRACT
 Q:'+ORID
 I $G(DCORIG)="" S DCORIG=0
 S CURRACT=0
 S ORL(2)=ORL_";SC(",ORL=ORL(2),NATURE=""
 I REASON S NATURE=$P(^ORD(100.02,$P(^ORD(100.03,REASON,0),U,7),0),U,2)
 S:NATURE="" NATURE="W"  ; S:ORNP=DUZ NATURE="E"
 S CREATE=1,PRINT=$$PRINT^ORCACT2(NATURE)
 S X3=$G(^OR(100,+ORID,3))
 S CURRACT=$P(X3,U,7) S:CURRACT<1 CURRACT=+$O(^OR(100,+ORID,8,"?"),-1)
 I '$D(^OR(100,+ORID,8,+$P(ORID,";",2),0)) D
 . S X8=$G(^OR(100,+ORID,8,CURRACT,0))
 . S SIGSTS=$P(X8,U,4)
 . S $P(ORID,";",2)=CURRACT
 E  D
 . S X8=^OR(100,+ORID,8,+$P(ORID,";",2),0)
 . S SIGSTS=$P(X8,U,4)
 I '$D(SIGSTS) S SIGSTS=1
 S STATUS=$P($G(^OR(100,+ORID,8,+$P(ORID,";",2),0)),U,15)
 I (STATUS=10)!(STATUS=11) D  Q   ; delete/cancel unreleased order
 . N RPLORD
 . S RPLORD=$P($G(^OR(100,+ORID,3)),U,5)    ; replaced order
 . D GETBYIFN^ORWORR(.REC,ORID)
 . I STATUS=10,($P(X8,U,4)'=2) D  ; CANCEL signed, delayed, unreleased
 . . ; taken from CLRDLY^ORCACT2
 . . I REASON D SET^ORCACT2(+ORID,NATURE,REASON,,DCORIG)
 . . I 'REASON D SET^ORCACT2(+ORID,"M","","Delayed Order Cancelled",DCORIG)
 . . D STATUS^ORCSAVE2(+ORID,13) S $P(^OR(100,+ORID,8,1,0),U,15)=13
 . E  D                           ; CANCEL OR DELETE unsigned, unreleased
 . . I $P(X8,U,2)="DC" K ^OR(100,+ORID,6)
 . . ; delete fwd ptr to order about to be deleted
 . . I RPLORD,$P(X8,U,2)="NW" S $P(^OR(100,RPLORD,3),U,6)=""
 . . ; delete ptr to order in Patient Event file #100.2
 . . N EVT S EVT=$P($G(^OR(100,+ORID,0)),U,17) I EVT,EVT=+$O(^ORE(100.2,"AO",+ORID,0)) S $P(^ORE(100.2,EVT,0),U,4)="" K ^ORE(100.2,"AO",+ORID,EVT)
 . . I $G(ISNEWORD) D DELETE^ORCSAVE2(ORID)
 . . I '$G(ISNEWORD) D CANCEL^ORCSAVE2(ORID)
 . I RPLORD,'(SIGSTS=1) S ORID=RPLORD  ; for Renews & Changes, show replaced order
 . I '$D(^OR(100,+ORID)) D
 . . S $P(REC(1),U)="~0",REC(2)="tDELETED: "_$E(REC(2),2,245)
 . E  D
 . . K REC
 . . D GETBYIFN^ORWORR(.REC,+ORID_";"_$P($G(^OR(100,+ORID,3)),U,7))
 . S $P(REC(1),U,14)=2 ; DCType = deletion
 S ACTDA=$$ACTION^ORCSAVE("DC",+ORID,ORNP)
 D SET^ORCACT2(+ORID,NATURE,REASON,,DCORIG)
 D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)
 S $P(REC(1),U,14)=$S(CREATE:1,1:3)  ;DCType - 1=NewOrder, 3=NewStatus
 N PKG
 S PKG=$P($G(^OR(100,+ORID,0)),U,14)
 S PKG=$$NMSP^ORCD(PKG)
 I REASON=16&(PKG="PS") D
 . N XMB
 . S XMB="OR DRUG ORDER CANCELLED"
 . S XMB(1)=$P($G(REC(2)),"tDiscontinue",2),XMB(4)=$P($G(^VA(200,DUZ,0)),U)
 . S XMB(2)=+ORID
 . S XMB(3)=+$P($G(^OR(100,+ORID,0)),U,2)
 . S XMB(3)=$P($G(^DPT(XMB(3),0)),U)
 . D ^XMB```




 Generated on January 13th 2017, 6:55:29 am