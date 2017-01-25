---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXQ DLGNAME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXQ DLGNAME{:/}
 tag | {::nomarkdown}DLGNAME{:/}
 routine | [ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return display name for a dialog.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DLGNAME^[ORWDXQ](http://code.osehra.org/dox/Routine_ORWDXQ_source.html)
 Method comment | Return display name for a dialog (DELETE??)
 Input parameters | {::nomarkdown}INAME{:/}
 Code | {::nomarkdown}  N IEN S IEN=$O(^ORD(101.41,"B",INAME,0))<br> S VAL=$P($G(^ORD(101.41,IEN,5)),U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}