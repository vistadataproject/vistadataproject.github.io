---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 COMLOC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 COMLOC{:/}
 tag | {::nomarkdown}COMLOC{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if all orders in a list have a common ordering location.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return common location for orders in list, if any
 Input Parameters | {::nomarkdown}ORDERS{:/}
 Lines | ```
 N I
 S LOC=0,I=0
 F  S I=$O(ORDERS(I)) Q:'I  D  Q:LOC
 . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q
 . S LOC=+$P($G(^OR(100,+ORDERS(I),0)),U,10)
 I LOC F  S I=$O(ORDERS(I)) Q:'I  D  Q:'LOC
 . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q
 . I (+$P($G(^OR(100,+ORDERS(I),0)),U,10)'=LOC) S LOC=0```




 Generated on January 13th 2017, 6:55:29 am