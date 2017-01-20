---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA WCGET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA WCGET{:/}
 tag | {::nomarkdown}WCGET{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return ward comments for an order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | WCGET^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | ward comments
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  N I,ORIFN,ACT S ORIFN=+ORID,ACT=+$P(ORID,";",2)<br> S I=0 F  S I=$O(^OR(100,ORIFN,8,ACT,5,I)) Q:'I  S LST(I)=$G(^(I,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}