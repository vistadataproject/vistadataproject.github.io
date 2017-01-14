---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 SIG4ANY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SIG4ANY{:/}
 tag | {::nomarkdown}SIG4ANY{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if any orders in the list require a signature.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SIG4ANY^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | Return 1 if any order requires a signature
 Input parameters | {::nomarkdown}ORDERS{:/}
 Code | {::nomarkdown}  N I<br> S I=0,REQ=0<br> F  S I=$O(ORDERS(I)) Q:'I  D  Q:REQ<br> . I +$P($G(^OR(100,+ORDERS(I),0)),U,16) S REQ=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}