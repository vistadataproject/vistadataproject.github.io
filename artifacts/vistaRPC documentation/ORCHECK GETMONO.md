---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCHECK GETMONO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCHECK GETMONO{:/}
 tag | {::nomarkdown}GETMONO{:/}
 routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETMONO^[ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
 Method comment | return a monograph
 Input parameters | {::nomarkdown}ORMONO{:/}
 Code | {::nomarkdown}  Q:'$D(^TMP($J,"ORMONOGRAPH",ORMONO))<br> K ^TMP($J,"ORMONORPC")<br> M ^TMP($J,"ORMONORPC")=^TMP($J,"ORMONOGRAPH",ORMONO,"DATA")<br> K ^TMP($J,"ORMONORPC",0)<br> S ORY=$NA(^TMP($J,"ORMONORPC")),@ORY=""{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}