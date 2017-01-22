---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR GETPKG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR GETPKG{:/}
 tag | {::nomarkdown}GETPKG{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETPKG^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Get package for an order
 Input parameters | {::nomarkdown}IFN{:/}
 Code | {::nomarkdown}  N ORDERID,PKGID<br> Q:+IFN<1<br> S ORDERID=+IFN,Y=""<br> S PKGID=$P(^OR(100,ORDERID,0),U,14)<br> S:PKGID>0 Y=$P(^DIC(9.4,PKGID,0),U,2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}