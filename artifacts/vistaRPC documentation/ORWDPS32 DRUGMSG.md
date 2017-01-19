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

 property | value 
 --- | --- 
 Method | DRUGMSG^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return any message associated with a dispense drug
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N X S X=$$ENDCM^PSJORUTL(IEN)<br> S VAL=$P(X,U,2)_U_$P(X,U,4){:/}


### CPRS

[Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}