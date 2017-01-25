---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA HOLD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA HOLD{:/}
 tag | {::nomarkdown}HOLD{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to place an existing order on hold.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HOLD^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Place order on hold
 Input parameters | {::nomarkdown}ORID, ORNP{:/}
 Code | {::nomarkdown}  N ACTDA<br> S ACTDA=$$ACTION^ORCSAVE("HD",+ORID,ORNP)<br> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}