---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DELDFLT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DELDFLT{:/}
 tag | {::nomarkdown}DELDFLT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DELDFLT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Delete default release event
 Input parameters | {::nomarkdown}PVIFN{:/}
 Code | {::nomarkdown}  Q:'PVIFN<br> N ORERR<br> S ORERR=""<br> D DEL^XPAR(PVIFN_";VA(200,","OREVNT DEFAULT",1,.ORERR){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}