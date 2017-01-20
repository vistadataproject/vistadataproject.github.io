---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DLGIEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DLGIEN{:/}
 tag | {::nomarkdown}DLGIEN{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DLGIEN^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return Order Dialog IEN based on name
 Input parameters | {::nomarkdown}DLGNAME{:/}
 Code | {::nomarkdown}  Q:'$D(^ORD(101.41,"B",DLGNAME))<br> S ORY=$O(^ORD(101.41,"B",DLGNAME,0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}