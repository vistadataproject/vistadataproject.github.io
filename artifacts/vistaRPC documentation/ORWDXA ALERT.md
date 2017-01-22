---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA ALERT{:/}
 tag | {::nomarkdown}ALERT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set order to send an alert when the order is resulted.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALERT^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | alert user (ORDUZ) when order (ORID) resulted
 Input parameters | {::nomarkdown}ORID, ORDUZ{:/}
 First comment | {::nomarkdown}<pre>if no user passed, use ordering provider:</pre>{:/}
 Code | {::nomarkdown}  I $G(ORDUZ)<1 S ORDUZ=+$$ORDERER^ORQOR2(+ORID)<br> I $L($G(ORDUZ))<1 S ORDUZ=DUZ<br> S DUMMY=1,$P(^OR(100,+ORID,3),U,10)=ORDUZ{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}