---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR PKIUSE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR PKIUSE{:/}
 tag | {::nomarkdown}PKIUSE{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PKIUSE^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | RPC determines user can use PKI Digital Signature
 Code | {::nomarkdown}  N ORPKIU<br> S RETURN=0<br> S ORPKIU=0 I $D(^ORD(100.7,"C",DUZ)) S ORPKIU=1<br> I ORPKIU S RETURN=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}