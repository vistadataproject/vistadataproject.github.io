---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETCSRNG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETCSRNG{:/}
 tag | {::nomarkdown}GETCSRNG{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get user's Cover Sheet date range defaults.
 Lines | ```
 N ORSRV,ORUSER,ORVAL
 S ORUSER=DUZ
 S ORVAL=""
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.
 S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")
 S ORVAL=$$CHKRNG(ORVAL,999)
 S VAL=ORVAL_U,ORVAL=""
 S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")
 S ORVAL=$$CHKRNG(ORVAL,999)
 S VAL=VAL_ORVAL```




 Generated on January 13th 2017, 6:55:29 am