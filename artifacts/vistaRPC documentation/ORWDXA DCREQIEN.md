---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA DCREQIEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA DCREQIEN{:/}
 tag | {::nomarkdown}DCREQIEN{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the IEN for Requesting Physician Cancelled reason.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DCREQIEN^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Return IEN for Req Phys Cancelled reason
 Code | {::nomarkdown}  S VAL=$O(^ORD(100.03,"S","REQ",0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}