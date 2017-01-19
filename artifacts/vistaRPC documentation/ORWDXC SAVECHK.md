---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC SAVECHK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC SAVECHK{:/}
 tag | {::nomarkdown}SAVECHK{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save order checks for session.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVECHK^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | Save order checks for session
 Input parameters | {::nomarkdown}ORVP<br>RSN<br>LST{:/}
 Code | {::nomarkdown}  N ORCHECK,ORIFN S OK=1<br> D LST2CHK<br> I $L(RSN)>0 S ORCHECK("OK")=RSN<br> S ORIFN=0 F  S ORIFN=$O(ORCHECK(ORIFN)) Q:'ORIFN  D OC^ORCSAVE2{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}