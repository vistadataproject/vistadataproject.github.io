---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 DRUGMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DRUGMSG{:/}
 tag | {::nomarkdown}DRUGMSG{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return message text that is associated with a dispense drug.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DRUGMSG^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return any message associated with a dispense drug
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N X S X=$$ENDCM^PSJORUTL(IEN)<br> S VAL=$P(X,U,2)_U_$P(X,U,4){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}