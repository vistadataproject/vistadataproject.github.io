---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 SIG4ONE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SIG4ONE{:/}
 tag | {::nomarkdown}SIG4ONE{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if an order requires a signature.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return 1 if order requires a signature
 Input Parameters | {::nomarkdown}ANORDER{:/}
 Lines | ```{::nomarkdown} S REQ=0<br/> I +$P($G(^OR(100,+ANORDER,0)),U,16) S REQ=1```{:/}




 Generated on January 13th 2017, 7:11:27 am