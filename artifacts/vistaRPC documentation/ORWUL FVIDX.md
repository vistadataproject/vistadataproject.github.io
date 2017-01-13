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
 Lines | ```{::nomarkdown} N I,X<br/> S VAL=0<br/> S X=$O(^ORD(101.44,IEN,20,"C",FROM))<br/> I '$L(X) Q<br/> S I=$O(^ORD(101.44,IEN,20,"C",X,0))<br/> Q:'I<br/> S VAL=+I_U_X```{:/}




 Generated on January 13th 2017, 7:11:27 am