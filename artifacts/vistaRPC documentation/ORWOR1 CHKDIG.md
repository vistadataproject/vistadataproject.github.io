---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 CHKDIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 CHKDIG{:/}
 tag | {::nomarkdown}CHKDIG{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if an order requires a digital signature.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CHKDIG^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Check if Digital Signature is required
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | {::nomarkdown}  N IFN,ACTION<br> S REQ=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)<br> I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,5) S REQ=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}