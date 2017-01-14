---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD1 SIG4ONE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SIG4ONE{:/}
 tag | {::nomarkdown}SIG4ONE{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if an order requires a signature.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SIG4ONE^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | Return 1 if order requires a signature
 Input parameters | {::nomarkdown}ANORDER{:/}
 Code | ```  S REQ=0
 I +$P($G(^OR(100,+ANORDER,0)),U,16) S REQ=1```




 Generated on January 14th 2017, 7:26:35 am