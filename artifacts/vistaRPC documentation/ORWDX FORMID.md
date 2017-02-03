---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX FORMID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX FORMID{:/}
 tag | {::nomarkdown}FORMID{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the base dialog FormID for an order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FORMID^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Base dlg FormID for an order
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | {::nomarkdown}  N DLG<br> S VAL=0,DLG=$P(^OR(100,+ORIFN,0),U,5)<br> Q:$P(DLG,";",2)'="ORD(101.41,"<br> D FORMID^ORWDXM(.VAL,+DLG){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}