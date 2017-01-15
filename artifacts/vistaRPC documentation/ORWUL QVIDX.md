---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL QVIDX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL QVIDX{:/}
 tag | {::nomarkdown}QVIDX{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | QVIDX^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return index of item beginning with FROM
 Input parameters | {::nomarkdown}IEN<br>FROM{:/}
 Code | {::nomarkdown}  N I,X<br> S VAL=0<br> S X=$O(^ORD(101.44,IEN,10,"C",FROM))<br> I '$L(X) Q<br> S I=$O(^ORD(101.44,IEN,10,"C",X,0))<br> Q:'I<br> S:'$$QODIS(IEN,I) VAL=+I_U_X{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}