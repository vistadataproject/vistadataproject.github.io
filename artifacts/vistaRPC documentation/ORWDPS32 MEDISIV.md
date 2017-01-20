---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 MEDISIV 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 MEDISIV{:/}
 tag | {::nomarkdown}MEDISIV{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if orderable item is an IV medication, otherwise return 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MEDISIV^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return true if orderable item is IV medication
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  S VAL=0<br> I $P($G(^ORD(101.43,IEN,"PS")),U)=2 S VAL=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}