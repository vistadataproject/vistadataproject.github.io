---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD1 RVPRINT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD1 RVPRINT{:/}
 tag | {::nomarkdown}RVPRINT{:/}
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC used by CPRS GUI to print orders to a designated print device afterthe review or sign actions were used.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RVPRINT^[ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 Method comment | print orders from review/sign actions
 Input parameters | {::nomarkdown}HLOC, ORWDEV, PRTLST{:/}
 Code | {::nomarkdown}  D PRINTS(.PRTLST,HLOC,ORWDEV) S OK=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}