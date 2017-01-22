---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA WCPUT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA WCPUT{:/}
 tag | {::nomarkdown}WCPUT{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set ward comments for an order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | WCPUT^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Set ward comments
 Input parameters | {::nomarkdown}ORID, WCLST{:/}
 Code | {::nomarkdown}  N DIERR,ERRLST,ORIFN,ACT S ORIFN=+ORID,ACT=+$P(ORID,";",2)<br> D WP^DIE(100.008,ACT_","_ORIFN_",",50,"","WCLST","ERRLST")<br> S ERR="" I $D(DIERR) S ERR="An error occurred while saving comments."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}