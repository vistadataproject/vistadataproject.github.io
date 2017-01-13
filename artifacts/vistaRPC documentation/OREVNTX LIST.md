---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns all processed events for patient DFN as
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N IDT,DA,CNT,X0,X1,EVT,DC,X
 S DFN=+$G(DFN),(IDT,CNT)=0
 F  S IDT=$O(^ORE(100.2,"AC",DFN,IDT)) Q:IDT<1  D
 . S DA=0 F  S DA=+$O(^ORE(100.2,"AC",DFN,IDT,DA)) Q:DA<1  D
 .. S X0=$G(^ORE(100.2,DA,0)),X1=$G(^(1)) Q:$P(X1,U,5)  ;has parent
 .. S EVT=+$P(X0,U,2),DC=+$P(X1,U,3)
 .. I '$P(X0,U,4),'$O(^ORE(100.2,DA,2,0)),'$O(^ORE(100.2,DA,3,0)),'$D(^OR(100,"AEVNT",DFN_";DPT(",DA)) Q  ;no orders
 .. S I=+$O(^ORE(100.2,DA,10,"B"),-1),X=$P($G(^(I,0)),U,2) I X="LP"!(X="CA") Q  ;lapsed or cancelled
 .. ;Q if not current admission?
 .. S X=$S(EVT:$P($G(^ORD(100.5,EVT,0)),U,8),DC:$P($G(^ORD(100.6,DC,0)),U,5),1:"UNSPECIFIED EVENT")
 .. S X=$$LOWER^VALM1(X),CNT=CNT+1,ORY(CNT)=DA_U_X_U_$P(X1,U)
 S:CNT ORY(0)=CNT```
 Leading comment lines | {::nomarkdown}ORY(#) = PatEvtIEN ^ Display Text ^ EvtDateTime<br/>in reverse chronological order{:/}




 Generated on January 13th 2017, 6:55:29 am