---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG ALLTREE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG ALLTREE{:/}
 tag | {::nomarkdown}ALLTREE{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the tree for all display groups.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ALLTREE^[ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 Method comment | Return the tree for all display groups
 Code | {::nomarkdown}  N ROOT,ILST<br> S ILST=0,ROOT=$O(^ORD(100.98,"B","ALL",0))<br> S ILST=ILST+1,LST(ILST)=ROOT_U_"ALL SERVICES^0^+"<br> D LSTCHLD(ROOT){:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}