---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX SENDED 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX SENDED{:/}
 tag | {::nomarkdown}SENDED{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SENDED^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Release EDOs to svc
 Input parameters | {::nomarkdown}ORIENS<br/>TS<br/>LOC{:/}
 Code | ```  N OK,ORVP,ORWERR,ORSIGST,ORDA,ORNATURE,ORIX,X,PTEVT,ORIFN,J,EVENT,LOCK,OR3
 S ORWERR="",ORIX=0,LOC=LOC_";SC("
 F  S ORIX=$O(ORIENS(ORIX)) Q:'ORIX  D  Q:ORWERR]""
 . S (ORIFN,ORWLST(ORIX))=ORIENS(ORIX)
 . S PTEVT=$P(^OR(100,+ORIFN,0),U,17)
 . I PTEVT D
 .. I $D(EVENT(PTEVT)) S LOCK=1 Q
 .. S LOCK=$$LCKEVT^ORX2(PTEVT) S:LOCK EVENT(PTEVT)=""
 . I 'LOCK S ORWERR="1^delayed event is locked - another user is processing orders for this event" S ORWLST(ORIX)=ORWLST(ORIX)_"^E^"_ORWERR Q
 . S ORDA=$P(ORIFN,";",2) S:'ORDA ORDA=1
 . S ORVP=$P($G(^OR(100,+ORIFN,0)),U,2)
 . I $D(^OR(100,+ORIFN,8,ORDA,0)) D
 .. S ORSIGST=$P($G(^(0)),U,4),ORNATURE=$P($G(^(0)),U,12) ;naked references refer to OR(100,+ORIFN,8,ORDA on line above
 . S OK=$$LOCK1^ORX2(ORIFN) I 'OK S ORWERR="1^"_$P(OK,U,2)
 . I OK,$G(LOCK) D
 .. S OR3=$G(^OR(100,+ORIFN,3)) I $P(OR3,"^",3)'=10!($P(OR3,"^",9)]"") D UNLK1^ORX2(ORIENS(ORIX)) Q  ;order already released or has a parent
 .. S:$G(LOC) $P(^OR(100,+ORIFN,0),U,10)=LOC ;set location
 .. S:$G(TS) $P(^OR(100,+ORIFN,0),U,13)=TS ;set specialty
 .. D EN2^ORCSEND(ORIENS(ORIX),ORSIGST,ORNATURE,.ORWERR),UNLK1^ORX2(ORIENS(ORIX)) ;add ,LOCK to if statement for 195
 . I $L(ORWERR) S ORWLST(ORIX)=ORWLST(ORIX)_"^E^"_ORWERR Q
 . E  D
 .. S PTEVT=$P($G(^OR(100,+ORIENS(ORIX),0)),U,17)
 .. D:$$TYPE^OREVNTX(PTEVT)="M" SAVE^ORMEVNT1(ORIENS(ORIX),PTEVT,2)
 . S X="RS"
 . S $P(ORWLST(ORIX),U,2)=X
 S J=0 F  S J=$O(EVENT(J)) Q:'+J  D UNLEVT^ORX2(J) ;195```




 Generated on January 14th 2017, 7:26:35 am