---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 SIG4ONE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 SIG4ONE{:/}
 tag | {::nomarkdown}SIG4ONE{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if an order requires a signature.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SIG4ONE^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | Return 1 if order requires a signature
 Input parameters | {::nomarkdown}ANORDER{:/}
 Code | {::nomarkdown}  S REQ=0<br> I +$P($G(^OR(100,+ANORDER,0)),U,16) S REQ=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}