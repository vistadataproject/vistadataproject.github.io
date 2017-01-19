---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX SENDED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SENDED{:/}
 tag | {::nomarkdown}SENDED{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SENDED^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Release EDOs to svc
 Input parameters | {::nomarkdown}ORIENS<br>TS<br>LOC{:/}
 Code | {::nomarkdown}  N OK,ORVP,ORWERR,ORSIGST,ORDA,ORNATURE,ORIX,X,PTEVT,ORIFN,J,EVENT,LOCK,OR3<br> S ORWERR="",ORIX=0,LOC=LOC_";SC("<br> F  S ORIX=$O(ORIENS(ORIX)) Q:'ORIX  D  Q:ORWERR]""<br> . S (ORIFN,ORWLST(ORIX))=ORIENS(ORIX)<br> . S PTEVT=$P(^OR(100,+ORIFN,0),U,17)<br> . I PTEVT D<br> .. I $D(EVENT(PTEVT)) S LOCK=1 Q<br> .. S LOCK=$$LCKEVT^ORX2(PTEVT) S:LOCK EVENT(PTEVT)=""<br> . I 'LOCK S ORWERR="1^delayed event is locked - another user is processing orders for this event" S ORWLST(ORIX)=ORWLST(ORIX)_"^E^"_ORWERR Q<br> . S ORDA=$P(ORIFN,";",2) S:'ORDA ORDA=1<br> . S ORVP=$P($G(^OR(100,+ORIFN,0)),U,2)<br> . I $D(^OR(100,+ORIFN,8,ORDA,0)) D<br> .. S ORSIGST=$P($G(^(0)),U,4),ORNATURE=$P($G(^(0)),U,12) ;naked references refer to OR(100,+ORIFN,8,ORDA on line above<br> . S OK=$$LOCK1^ORX2(ORIFN) I 'OK S ORWERR="1^"_$P(OK,U,2)<br> . I OK,$G(LOCK) D<br> .. S OR3=$G(^OR(100,+ORIFN,3)) I $P(OR3,"^",3)'=10!($P(OR3,"^",9)]"") D UNLK1^ORX2(ORIENS(ORIX)) Q  ;order already released or has a parent<br> .. S:$G(LOC) $P(^OR(100,+ORIFN,0),U,10)=LOC ;set location<br> .. S:$G(TS) $P(^OR(100,+ORIFN,0),U,13)=TS ;set specialty<br> .. D EN2^ORCSEND(ORIENS(ORIX),ORSIGST,ORNATURE,.ORWERR),UNLK1^ORX2(ORIENS(ORIX)) ;add ,LOCK to if statement for 195<br> . I $L(ORWERR) S ORWLST(ORIX)=ORWLST(ORIX)_"^E^"_ORWERR Q<br> . E  D<br> .. S PTEVT=$P($G(^OR(100,+ORIENS(ORIX),0)),U,17)<br> .. D:$$TYPE^OREVNTX(PTEVT)="M" SAVE^ORMEVNT1(ORIENS(ORIX),PTEVT,2)<br> . S X="RS"<br> . S $P(ORWLST(ORIX),U,2)=X<br> S J=0 F  S J=$O(EVENT(J)) Q:'+J  D UNLEVT^ORX2(J) ;195{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}