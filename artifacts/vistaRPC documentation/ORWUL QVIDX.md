---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QVIDX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVIDX{:/}
 tag | {::nomarkdown}QVIDX{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return index of item beginning with FROM
 Input Parameters | {::nomarkdown}IEN<br/>FROM{:/}
 Lines | ```
 N I,X
 S VAL=0
 S X=$O(^ORD(101.44,IEN,10,"C",FROM))
 I '$L(X) Q
 S I=$O(^ORD(101.44,IEN,10,"C",X,0))
 Q:'I
 S:'$$QODIS(IEN,I) VAL=+I_U_X```




 Generated on January 13th 2017, 6:55:29 am