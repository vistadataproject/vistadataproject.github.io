---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETCSRNG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETCSRNG{:/}
 tag | {::nomarkdown}GETCSRNG{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETCSRNG^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Get user's Cover Sheet date range defaults.
 Code | {::nomarkdown}  N ORSRV,ORUSER,ORVAL<br> S ORUSER=DUZ<br> S ORVAL=""<br> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.<br> S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")<br> S ORVAL=$$CHKRNG(ORVAL,999)<br> S VAL=ORVAL_U,ORVAL=""<br> S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")<br> S ORVAL=$$CHKRNG(ORVAL,999)<br> S VAL=VAL_ORVAL{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Options/rOptions.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}