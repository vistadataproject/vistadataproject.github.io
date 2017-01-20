---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDSCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDSCH{:/}
 tag | {::nomarkdown}GETDSCH{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the schedule of the drug.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDSCH^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Check if Drug Schedule
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | {::nomarkdown}  N IFN,ACTION<br> S IFN=+ORDER,ACTION=$P(ORDER,";",2)<br> S Y=$P($G(^OR(100,+IFN,8,+ACTION,2)),U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}