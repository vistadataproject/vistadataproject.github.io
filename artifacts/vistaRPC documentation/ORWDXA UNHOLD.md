---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA UNHOLD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA UNHOLD{:/}
 tag | {::nomarkdown}UNHOLD{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to remove a particular order from hold status.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | UNHOLD^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Release order from hold
 Input parameters | {::nomarkdown}ORID, ORNP{:/}
 Code | {::nomarkdown}  N ACTDA<br> S ACTDA=$$ACTION^ORCSAVE("RL",+ORID,ORNP)<br> D GETBYIFN^ORWORR(.REC,+ORID_";"_ACTDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}