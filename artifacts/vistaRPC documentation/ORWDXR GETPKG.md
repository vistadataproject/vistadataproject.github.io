---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR GETPKG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR GETPKG{:/}
 tag | {::nomarkdown}GETPKG{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get package for an order
 Input Parameters | {::nomarkdown}IFN{:/}
 Lines | ```{::nomarkdown} N ORDERID,PKGID<br/> Q:+IFN<1<br/> S ORDERID=+IFN,Y=""<br/> S PKGID=$P(^OR(100,ORDERID,0),U,14)<br/> S:PKGID>0 Y=$P(^DIC(9.4,PKGID,0),U,2)```{:/}




 Generated on January 13th 2017, 7:11:27 am