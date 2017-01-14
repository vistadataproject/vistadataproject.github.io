---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWUL FVIDX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWUL FVIDX{:/}
 tag | {::nomarkdown}FVIDX{:/}
 routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | FVIDX^[ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
 Method comment | return index of item beginning with FROM
 Input parameters | {::nomarkdown}IEN<br>FROM{:/}
 Code | {::nomarkdown}  N I,X<br> S VAL=0<br> S X=$O(^ORD(101.44,IEN,20,"C",FROM))<br> I '$L(X) Q<br> S I=$O(^ORD(101.44,IEN,20,"C",X,0))<br> Q:'I<br> S VAL=+I_U_X{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}