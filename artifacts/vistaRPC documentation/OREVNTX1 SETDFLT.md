---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 SETDFLT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 SETDFLT{:/}
 tag | {::nomarkdown}SETDFLT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SETDFLT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Set personal default event
 Input parameters | {::nomarkdown}EVT{:/}
 Code | {::nomarkdown}  N ERR,VAL S ERR=""<br> Q:'$D(^ORD(100.5,EVT,0))<br> S VAL=$P(^ORD(100.5,EVT,0),U)<br> D EN^XPAR(DUZ_";VA(200,","OREVNT DEFAULT",1,VAL,ERR)<br> S ORY=ERR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}