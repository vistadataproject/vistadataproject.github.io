---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS4 ISUDIV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS4 ISUDIV{:/}
 tag | {::nomarkdown}ISUDIV{:/}
 routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISUDIV^[ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
 Method comment | True: OI of the order is for both UD and IV
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | {::nomarkdown}  N OI<br> S (OI,ORY)=0<br> S OI=+$O(^OR(100,+$G(ORIFN),.1,"B",0)) Q:OI<1<br> I $O(^ORD(101.43,OI,9,"B","IVM RX",0)) S ORY=1<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}