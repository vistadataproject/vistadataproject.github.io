---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD GETSETS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETSETS{:/}
 tag | {::nomarkdown}GETSETS{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get time/occ limit set for each report
 Lines | ```
 N I,CNT,CAT,SEC
 S I=0,CNT=1,RST=""
 F  S I=$O(^ORD(101.24,I)) Q:'I   D
 . I $P($G(^ORD(101.24,I,0)),U,12)'="M" D
 .. S CAT=$P(^ORD(101.24,I,0),U,7),SEC=$P(^(0),U,8)
 .. I $S(CAT=1:1,CAT=6:1,1:0)!($P(^(0),U)="ORRP IMAGING") D
 ... D GETINDV(.RST,I)
 ... I $L($P(^ORD(101.24,I,2),U,4))>0 S Y(CNT)=I_U_$P(^(2),U,4)_" ["_SEC_"]"_U_RST
 ... E  S Y(CNT)=I_U_$P(^ORD(101.24,I,2),U,3)_" ["_SEC_"]"_U_RST
 ... S CNT=CNT+1
 K I,CNT,RST,CAT```




 Generated on January 13th 2017, 6:55:29 am