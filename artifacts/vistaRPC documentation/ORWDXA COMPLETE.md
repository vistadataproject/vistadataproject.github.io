---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA COMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA COMPLETE{:/}
 tag | {::nomarkdown}COMPLETE{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Complete an order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COMPLETE^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Complete order (generic)
 Input parameters | {::nomarkdown}ORID, ESCODE{:/}
 First comment | {::nomarkdown}<pre>N X S X=+$E($$NOW^XLFDT,1,12)<br/>D DATES^ORCSAVE2(+ORID,,X)<br/>D STATUS^ORCSAVE2(+ORID,2)<br/> validate ESCode</pre>{:/}
 Code | {::nomarkdown}  D COMP^ORCSAVE2(ORID)<br> D COMP^ORMBLDOR(ORID)<br> D GETBYIFN^ORWORR(.REC,ORID){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}