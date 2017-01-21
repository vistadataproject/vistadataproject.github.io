---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 COMLOC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 COMLOC{:/}
 tag | {::nomarkdown}COMLOC{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if all orders in a list have a common ordering location.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COMLOC^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | Return common location for orders in list, if any
 Input parameters | {::nomarkdown}ORDERS{:/}
 Code | {::nomarkdown}  N I<br> S LOC=0,I=0<br> F  S I=$O(ORDERS(I)) Q:'I  D  Q:LOC<br> . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q<br> . S LOC=+$P($G(^OR(100,+ORDERS(I),0)),U,10)<br> I LOC F  S I=$O(ORDERS(I)) Q:'I  D  Q:'LOC<br> . I $P(ORDERS(I),U,2)'["R",($P(ORDERS(I),U,2)'["S") Q<br> . I (+$P($G(^OR(100,+ORDERS(I),0)),U,10)'=LOC) S LOC=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}