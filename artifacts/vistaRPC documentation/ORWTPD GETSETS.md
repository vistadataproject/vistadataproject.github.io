---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD GETSETS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETSETS{:/}
 tag | {::nomarkdown}GETSETS{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETSETS^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Get time/occ limit set for each report
 Code | {::nomarkdown}  N I,CNT,CAT,SEC<br> S I=0,CNT=1,RST=""<br> F  S I=$O(^ORD(101.24,I)) Q:'I   D<br> . I $P($G(^ORD(101.24,I,0)),U,12)'="M" D<br> .. S CAT=$P(^ORD(101.24,I,0),U,7),SEC=$P(^(0),U,8)<br> .. I $S(CAT=1:1,CAT=6:1,1:0)!($P(^(0),U)="ORRP IMAGING") D<br> ... D GETINDV(.RST,I)<br> ... I $L($P(^ORD(101.24,I,2),U,4))>0 S Y(CNT)=I_U_$P(^(2),U,4)_" ["_SEC_"]"_U_RST<br> ... E  S Y(CNT)=I_U_$P(^ORD(101.24,I,2),U,3)_" ["_SEC_"]"_U_RST<br> ... S CNT=CNT+1<br> K I,CNT,RST,CAT{:/}


### CPRS

[Options/fOptionsReportsCustom.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/fOptionsReportsCustom.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}