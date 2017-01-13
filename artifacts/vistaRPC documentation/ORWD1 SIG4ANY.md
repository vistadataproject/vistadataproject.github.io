---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 SIG4ANY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SIG4ANY{:/}
 tag | {::nomarkdown}SIG4ANY{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if any orders in the list require a signature.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return 1 if any order requires a signature
 Input Parameters | {::nomarkdown}ORDERS{:/}
 Lines | ```{::nomarkdown} N I<br/> S I=0,REQ=0<br/> F  S I=$O(ORDERS(I)) Q:'I  D  Q:REQ<br/> . I +$P($G(^OR(100,+ORDERS(I),0)),U,16) S REQ=1```{:/}




 Generated on January 13th 2017, 7:11:27 am