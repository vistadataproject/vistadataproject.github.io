---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCDLR2 CHECK ONE LC TO WC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCDLR2 CHECK ONE LC TO WC{:/}
 tag | {::nomarkdown}KIDS{:/}
 routine | [ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | KIDS^[ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 Method comment | get child times, validate LC/IC
 Input parameters | {::nomarkdown}ORL, ORIFN, DATE, TYPE, SCH, DUR{:/}
 First comment | {::nomarkdown}<pre> ORL   = Hospital Location file #44 vptr<br/> ORIFN = Orders file #100 ien<br/>   or<br/> DATE  = Start date.time or "AM" or "NEXT"<br/> TYPE  = LC or I<br/> SCH   = Administration Schedule file #51.1 ien<br/> DUR   = # or "X"_#<br/> Will quit if OREVENT exists <can't check delayed orders><br/> <br/> Returns ORY(n) = child start.time ^ 1 or 0 ^ [error message]<br/> </pre>{:/}
 Code | {::nomarkdown}  N OR0,VALIDT,ORTIME,ORIMTIME,ORDIV,X,Y,%DT,ORSTRT,ORI,ORN,OK<br> S OR0=$G(^OR(100,+$G(ORIFN),0)) Q:$P(OR0,U,17)  Q:$G(OREVENT)  ;delayed orders<br> I $G(ORIFN),'$L($G(DATE))!'$L($G(TYPE))!'$G(SCH)!'$L($G(DUR)) D  ;get values<br> . S DATE=$$VALUE^ORX8(ORIFN,"START")<br> . S TYPE=$$VALUE^ORX8(ORIFN,"COLLECT")<br> . S SCH=$$VALUE^ORX8(ORIFN,"SCHEDULE")<br> . S DUR=$$VALUE^ORX8(ORIFN,"DAYS")<br> Q:'$L($G(DATE))  Q:'$G(SCH)  Q:"SPWC"[$G(TYPE)  Q:'$L($G(DUR))<br> S VALIDT="" D GETIMES^ORCDLR1<br> D AM^ORCSAVE2:DATE="AM",NEXT^ORCSAVE2:DATE="NEXT" ; returns X<br> S %DT="T" S:'$D(X) X=DATE  D ^%DT I Y<1 Q<br> D SCHEDULE(.ORSTRT,Y,SCH,DUR) Q:ORSTRT'>1 0 ; get all starts<br> K ORY S ORY=ORSTRT<br> S (ORI,ORN)=0 F  S ORI=$O(ORSTRT(ORI)) Q:'ORI  S OK="" D<br> . I TYPE="LC" S OK=$$LABCOLL^ORCDLR1(ORI)<br> . I TYPE="I" S OK=$$IMMCOLL^ORCDLR1(ORI)<br> . S ORN=ORN+1,ORY(ORN)=ORI_U_OK{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}