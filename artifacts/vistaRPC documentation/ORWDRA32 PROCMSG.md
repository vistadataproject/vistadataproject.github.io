---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 PROCMSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 PROCMSG{:/}
 tag | {::nomarkdown}PROCMSG{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return order message for a procedure
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```{::nomarkdown} N I<br/> S I=0 F  S I=$O(^ORD(101.43,IEN,8,I)) Q:I'>0  S ORY(I)=^(I,0)```{:/}




 Generated on January 13th 2017, 7:11:26 am