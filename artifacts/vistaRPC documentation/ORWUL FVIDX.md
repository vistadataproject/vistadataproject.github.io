---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL FVIDX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL FVIDX{:/}
 tag | {::nomarkdown}FVIDX{:/}
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
 S X=$O(^ORD(101.44,IEN,20,"C",FROM))
 I '$L(X) Q
 S I=$O(^ORD(101.44,IEN,20,"C",X,0))
 Q:'I
 S VAL=+I_U_X```




 Generated on January 13th 2017, 6:55:29 am