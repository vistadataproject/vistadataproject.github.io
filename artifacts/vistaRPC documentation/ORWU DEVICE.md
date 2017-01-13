---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU DEVICE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU DEVICE{:/}
 tag | {::nomarkdown}DEVICE{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of print devices.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a subset of entries from the Device file
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | ```
 N I,IEN,CNT,SHOW,X S I=0,CNT=20
 I FROM["<" S FROM=$RE($P($RE(FROM),"<  ",2))
 F  Q:I'<CNT  S FROM=$O(^%ZIS(1,"B",FROM),DIR) Q:FROM=""  D
 . S IEN=0 F  S IEN=$O(^%ZIS(1,"B",FROM,IEN)) Q:'IEN  D
 .. N X0,X1,X90,X91,X95,XTYPE,XSTYPE,XTIME,ORA,ORPX,POP,ORPCNT
 .. Q:'$D(^%ZIS(1,IEN,0))  S X0=^(0),X1=$G(^(1)),X90=$G(^(90)),X91=$G(^(91)),X95=$G(^(95)),XSTYPE=$G(^("SUBTYPE")),XTIME=$G(^("TIME")),XTYPE=$G(^("TYPE"))
 .. I $E($G(^%ZIS(2,+XSTYPE,0)))'="P" Q  ;Printers only
 .. S X=$P(XTYPE,"^") I X'="TRM",X'="HG",X'="HFS",X'="CHAN" Q  ;Device Types
 .. S X=X0 I ($P(X,U,2)="0")!($P(X,U,12)=2) Q  ;Queuing allowed
 .. S X=+X90 I X,(X'>DT) Q  ;Out of Service
 .. I XTIME]"" S ORA=$P(XTIME,"^"),ORPX=$P($H,",",2),ORPCNT=ORPX\60#60+(ORPX\3600*100),ORPX=$P(ORA,"-",2) I ORPX'<ORA&(ORPCNT'>ORPX&(ORPCNT'<ORA))!(ORPX<ORA&(ORPCNT'<ORA!(ORPCNT'>ORPX))) Q  ;Prohibited Times
 .. S POP=0
 .. I X95]"" S ORPX=$G(DUZ(0)) I ORPX'="@" S POP=1 F ORA=1:1:$L(ORPX) I X95[$E(ORPX,ORA) S POP=0 Q
 .. Q:POP  ;Security check
 .. S SHOW=$P(X0,U) I SHOW'=FROM S SHOW=FROM_"  <"_SHOW_">"
 .. S I=I+1,Y(I)=IEN_";"_$P(X0,U)_U_SHOW_U_$P(X1,U)_U_$P(X91,U)_U_$P(X91,U,3)```
 Leading comment lines | {::nomarkdown}.LST(n)=IEN;Name^DisplayName^Location^RMar^PLen<br/>FROM=text to $O from, DIR=$O direction{:/}




 Generated on January 13th 2017, 6:55:28 am