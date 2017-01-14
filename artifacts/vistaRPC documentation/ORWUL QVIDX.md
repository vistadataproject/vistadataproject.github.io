---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWUL QVIDX 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVIDX{:/}
 tag | {::nomarkdown}QVIDX{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | QVIDX^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return index of item beginning with FROM
 Input parameters | {::nomarkdown}IEN<br/>FROM{:/}
 Code | ```  N I,X
 S VAL=0
 S X=$O(^ORD(101.44,IEN,10,"C",FROM))
 I '$L(X) Q
 S I=$O(^ORD(101.44,IEN,10,"C",X,0))
 Q:'I
 S:'$$QODIS(IEN,I) VAL=+I_U_X```




 Generated on January 14th 2017, 7:26:35 am