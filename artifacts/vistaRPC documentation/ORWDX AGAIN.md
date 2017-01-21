---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX AGAIN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX AGAIN{:/}
 tag | {::nomarkdown}AGAIN{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a 1 if the dialog should be kept for another order, otherwise 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | AGAIN^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | return true to keep dlg for another order
 Input parameters | {::nomarkdown}DLG{:/}
 Code | {::nomarkdown}  S VAL=''$P($G(^ORD(101.41,DLG,0)),U,9){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}