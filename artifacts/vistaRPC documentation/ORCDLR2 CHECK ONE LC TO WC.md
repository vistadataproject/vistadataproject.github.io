---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCDLR2 CHECK ONE LC TO WC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCDLR2 CHECK ONE LC TO WC{:/}
 tag | {::nomarkdown}KIDS{:/}
 routine | [ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | get child times, validate LC/IC
 Input Parameters | {::nomarkdown}ORL<br/>ORIFN<br/>DATE<br/>TYPE<br/>SCH<br/>DUR{:/}
 Lines | ```{::nomarkdown} N OR0,VALIDT,ORTIME,ORIMTIME,ORDIV,X,Y,%DT,ORSTRT,ORI,ORN,OK<br/> S OR0=$G(^OR(100,+$G(ORIFN),0)) Q:$P(OR0,U,17)  Q:$G(OREVENT)  ;delayed orders<br/> I $G(ORIFN),'$L($G(DATE))!'$L($G(TYPE))!'$G(SCH)!'$L($G(DUR)) D  ;get values<br/> . S DATE=$$VALUE^ORX8(ORIFN,"START")<br/> . S TYPE=$$VALUE^ORX8(ORIFN,"COLLECT")<br/> . S SCH=$$VALUE^ORX8(ORIFN,"SCHEDULE")<br/> . S DUR=$$VALUE^ORX8(ORIFN,"DAYS")<br/> Q:'$L($G(DATE))  Q:'$G(SCH)  Q:"SPWC"[$G(TYPE)  Q:'$L($G(DUR))<br/> S VALIDT="" D GETIMES^ORCDLR1<br/> D AM^ORCSAVE2:DATE="AM",NEXT^ORCSAVE2:DATE="NEXT" ; returns X<br/> S %DT="T" S:'$D(X) X=DATE  D ^%DT I Y<1 Q<br/> D SCHEDULE(.ORSTRT,Y,SCH,DUR) Q:ORSTRT'>1 0 ; get all starts<br/> K ORY S ORY=ORSTRT<br/> S (ORI,ORN)=0 F  S ORI=$O(ORSTRT(ORI)) Q:'ORI  S OK="" D<br/> . I TYPE="LC" S OK=$$LABCOLL^ORCDLR1(ORI)<br/> . I TYPE="I" S OK=$$IMMCOLL^ORCDLR1(ORI)<br/> . S ORN=ORN+1,ORY(ORN)=ORI_U_OK```{:/}
 Leading comment lines | {::nomarkdown}ORL   = Hospital Location file #44 vptr<br/>ORIFN = Orders file #100 ien<br/>or<br/>DATE  = Start date.time or "AM" or "NEXT"<br/>TYPE  = LC or I<br/>SCH   = Administration Schedule file #51.1 ien<br/>DUR   = # or "X"_#<br/>Will quit if OREVENT exists <can't check delayed orders><br/>Returns ORY(n) = child start.time ^ 1 or 0 ^ [error message]{:/}




 Generated on January 13th 2017, 7:11:27 am