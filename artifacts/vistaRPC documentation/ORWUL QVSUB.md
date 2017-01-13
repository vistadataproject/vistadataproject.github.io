---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QVSUB 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVSUB{:/}
 tag | {::nomarkdown}QVSUB{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return subset of orders in view
 Input Parameters | {::nomarkdown}IEN<br/>FIRST<br/>LAST{:/}
 Lines | ```
 N I,J,ID ;117
 I $L(FIRST),$L(LAST) D
 . F I=+FIRST:1:+LAST D
 .. I $D(^ORD(101.44,IEN,10,I,0))>0 D
 ... I '$$QODIS(IEN,I) S LST(I)=^ORD(101.44,IEN,10,I,0)
 E  D
 . S (I,J)=0 F  S I=$O(^ORD(101.44,IEN,10,I)) Q:'+I  I '$$QODIS(IEN,I) S J=J+1,LST(J)=^ORD(101.44,IEN,10,I,0) ;117```




 Generated on January 13th 2017, 6:55:29 am