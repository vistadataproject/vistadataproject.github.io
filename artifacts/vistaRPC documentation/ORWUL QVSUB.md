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
 Lines | {::nomarkdown} N I,J,ID ;117<br/> I $L(FIRST),$L(LAST) D<br/> . F I=+FIRST:1:+LAST D<br/> .. I $D(^ORD(101.44,IEN,10,I,0))>0 D<br/> ... I '$$QODIS(IEN,I) S LST(I)=^ORD(101.44,IEN,10,I,0)<br/> E  D<br/> . S (I,J)=0 F  S I=$O(^ORD(101.44,IEN,10,I)) Q:'+I  I '$$QODIS(IEN,I) S J=J+1,LST(J)=^ORD(101.44,IEN,10,I,0) ;117{:/}




 Generated on January 13th 2017, 7:15:28 am