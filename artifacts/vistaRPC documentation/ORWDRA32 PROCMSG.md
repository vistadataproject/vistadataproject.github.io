---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 PROCMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 PROCMSG{:/}
 tag | {::nomarkdown}PROCMSG{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PROCMSG^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | return order message for a procedure
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N I<br> S I=0 F  S I=$O(^ORD(101.43,IEN,8,I)) Q:I'>0  S ORY(I)=^(I,0){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}