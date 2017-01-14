---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXR GETPKG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR GETPKG{:/}
 tag | {::nomarkdown}GETPKG{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETPKG^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Get package for an order
 Input parameters | {::nomarkdown}IFN{:/}
 Code | ```  N ORDERID,PKGID
 Q:+IFN<1
 S ORDERID=+IFN,Y=""
 S PKGID=$P(^OR(100,ORDERID,0),U,14)
 S:PKGID>0 Y=$P(^DIC(9.4,PKGID,0),U,2)```




 Generated on January 14th 2017, 7:26:35 am