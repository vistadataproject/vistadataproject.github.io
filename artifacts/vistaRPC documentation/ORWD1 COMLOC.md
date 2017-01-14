---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD1 COMLOC 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 COMLOC{:/}
 tag | {::nomarkdown}COMLOC{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if all orders in a list have a common ordering location.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | COMLOC^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | Return common location for orders in list, if any
 Input parameters | {::nomarkdown}ORDERS{:/}
 Code | ```  N I
 S LOC=0,I=0
 F  S I=$O(ORDERS(I)) Q:'I  D  Q:LOC
 . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q
 . S LOC=+$P($G(^OR(100,+ORDERS(I),0)),U,10)
 I LOC F  S I=$O(ORDERS(I)) Q:'I  D  Q:'LOC
 . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q
 . I (+$P($G(^OR(100,+ORDERS(I),0)),U,10)'=LOC) S LOC=0```




 Generated on January 14th 2017, 7:26:35 am