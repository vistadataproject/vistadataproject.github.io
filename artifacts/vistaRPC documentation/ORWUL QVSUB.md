---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWUL QVSUB 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVSUB{:/}
 tag | {::nomarkdown}QVSUB{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | QVSUB^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return subset of orders in view
 Input parameters | {::nomarkdown}IEN<br/>FIRST<br/>LAST{:/}
 Code | ```  N I,J,ID ;117
 I $L(FIRST),$L(LAST) D
 . F I=+FIRST:1:+LAST D
 .. I $D(^ORD(101.44,IEN,10,I,0))>0 D
 ... I '$$QODIS(IEN,I) S LST(I)=^ORD(101.44,IEN,10,I,0)
 E  D
 . S (I,J)=0 F  S I=$O(^ORD(101.44,IEN,10,I)) Q:'+I  I '$$QODIS(IEN,I) S J=J+1,LST(J)=^ORD(101.44,IEN,10,I,0) ;117```




 Generated on January 14th 2017, 7:26:35 am