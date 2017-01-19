---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC ON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC ON{:/}
 tag | {::nomarkdown}ON{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns E if order checking enabled, otherwise D.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ON^[ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 Method comment | returns E if order checking enabled, otherwise D
 Code | {::nomarkdown}  S VAL=$$GET^XPAR("DIV^SYS^PKG","ORK SYSTEM ENABLE/DISABLE"){:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}