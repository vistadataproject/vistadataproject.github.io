---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX DISMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX DISMSG{:/}
 tag | {::nomarkdown}DISMSG{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns disabled message for an ordering dialog.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DISMSG^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Disabled mge for ordering dlg
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  S VAL=$P($G(^ORD(101.41,+IEN,0)),U,3){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}