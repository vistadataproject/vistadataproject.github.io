---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXA DC
# ORWDXA DC

RPC to discontinue, cancel, or delete an existing order.

Property | Value
--- | ---
Label | DC
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [DC^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Discontinue/Cancel/Delete order
Input Parameters | ORID, ORNP, ORL, REASON, DCORIG, ISNEWORD
Code | {::nomarkdown}<pre><code> N NATURE,CREATE,PRINT,STATUS,ACTDA,SIGSTS<br/> N X3,X8,CURRACT<br/> Q:'+ORID<br/> I $G(DCORIG)="" S DCORIG=0<br/> S CURRACT=0<br/> S ORL(2)=ORL_";SC(",ORL=ORL(2),NATURE=""<br/> I REASON S NATURE=$P(^ORD(100.02,$P(^ORD(100.03,REASON,0),U,7),0),U,2)<br/> S:NATURE="" NATURE="W"  ; S:ORNP=DUZ NATURE="E"<br/> S CREATE=1,PRINT=$$PRINT^ORCACT2(NATURE)<br/> S X3=$G(^OR(100,+ORID,3))<br/> S CURRACT=$P(X3,U,7) S:CURRACT<1 CURRACT=+$O(^OR(100,+ORID,8,"?"),-1)<br/> I '$D(^OR(100,+ORID,8,+$P(ORID,";",2),0)) D<br/> . S X8=$G(^OR(100,+ORID,8,CURRACT,0))<br/> . S SIGSTS=$P(X8,U,4)<br/> . S $P(ORID,";",2)=CURRACT<br/> E  D<br/> . S X8=^OR(100,+ORID,8,+$P(ORID,";",2),0)<br/> . S SIGSTS=$P(X8,U,4)<br/> I '$D(SIGSTS) S SIGSTS=1<br/> S STATUS=$P($G(^OR(100,+ORID,8,+$P(ORID,";",2),0)),U,15)<br/> I (STATUS=10)!(STATUS=11) D  Q   ; delete/cancel unreleased order<br/> . N RPLORD<br/> . S RPLORD=$P($G(^OR(100,+ORID,3)),U,5)    ; replaced order<br/> . D GETBYIFN^ORWORR(.REC,ORID)<br/> . I STATUS=10,($P(X8,U,4)'=2) D  ; CANCEL signed, delayed, unreleased<br/> . . ; taken from CLRDLY^ORCACT2<br/> . . I REASON D SET^ORCACT2(+ORID,NATURE,REASON,,DCORIG)<br/> . . I 'REASON D SET^ORCACT2(+ORID,"M","","Delayed Order Cancelled",DCORIG)<br/> . . D STATUS^ORCSAVE2(+ORID,13) S $P(^OR(100,+ORID,8,1,0),U,15)=13<br/> . E  D                           ; CANCEL OR DELETE unsigned, unreleased<br/> . . I $P(X8,U,2)="DC" K ^OR(100,+ORID,6)<br/> . . ; delete fwd ptr to order about to be deleted<br/> . . I RPLORD,$P(X8,U,2)="NW" S $P(^OR(100,RPLORD,3),U,6)=""<br/> . . ; delete ptr to order in Patient Event file #100.2<br/> . . N EVT S EVT=$P($G(^OR(100,+ORID,0)),U,17) I EVT,EVT=+$O(^ORE(100.2,"AO",+ORID,0)) S $P(^ORE(100.2,EVT,0),U,4)="" K ^ORE(100.2,"AO",+ORID,EVT)<br/> . . I $G(ISNEWORD) D DELETE^ORCSAVE2(ORID)<br/> . . I '$G(ISNEWORD) D CANCEL^ORCSAVE2(ORID)<br/> . I RPLORD,'(SIGSTS=1) S ORID=RPLORD  ; for Renews & Changes, show replaced order<br/> . I '$D(^OR(100,+ORID)) D<br/> . . S $P(REC(1),U)="~0",REC(2)="tDELETED: "_$E(REC(2),2,245)<br/> . E  D<br/> . . K REC<br/> . . D GETBYIFN^ORWORR(.REC,+ORID_";"_$P($G(^OR(100,+ORID,3)),U,7))<br/> . S $P(REC(1),U,14)=2 ; DCType = deletion<br/> S ACTDA=$$ACTION^ORCSAVE("DC",+ORID,ORNP)<br/> D SET^ORCACT2(+ORID,NATURE,REASON,,DCORIG)<br/> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA)<br/> S $P(REC(1),U,14)=$S(CREATE:1,1:3)  ;DCType - 1=NewOrder, 3=NewStatus<br/> N PKG<br/> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S PKG=$$NMSP^ORCD(PKG)<br/> I REASON=16&(PKG="PS") D<br/> . N XMB<br/> . S XMB="OR DRUG ORDER CANCELLED"<br/> . S XMB(1)=$P($G(REC(2)),"tDiscontinue",2),XMB(4)=$P($G(^VA(200,DUZ,0)),U)<br/> . S XMB(2)=+ORID<br/> . S XMB(3)=+$P($G(^OR(100,+ORID,0)),U,2)<br/> . S XMB(3)=$P($G(^DPT(XMB(3),0)),U)<br/> . D ^XMB</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}