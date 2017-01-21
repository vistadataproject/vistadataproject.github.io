---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR GETTXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR GETTXT{:/}
 tag | {::nomarkdown}GETTXT{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the text of an existing order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETTXT^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | get text of an order
 Input parameters | {::nomarkdown}IFN{:/}
 Code | {::nomarkdown}  I $L(IFN,";")=1 S IFN=IFN_";1"<br> D TEXT^ORQ12(.LST,IFN,255){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}