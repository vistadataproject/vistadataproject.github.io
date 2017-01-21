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

 Property | Value 
 --- | --- 
 Method | ALLTREE^[ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 Method comment | Return the tree for all display groups
 Code | {::nomarkdown}  N ROOT,ILST<br> S ILST=0,ROOT=$O(^ORD(100.98,"B","ALL",0))<br> S ILST=ILST+1,LST(ILST)=ROOT_U_"ALL SERVICES^0^+"<br> D LSTCHLD(ROOT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}