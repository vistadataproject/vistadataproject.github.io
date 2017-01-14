---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETCSRNG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETCSRNG{:/}
 tag | {::nomarkdown}GETCSRNG{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETCSRNG^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Get user's Cover Sheet date range defaults.
 Code | ```  N ORSRV,ORUSER,ORVAL
 S ORUSER=DUZ
 S ORVAL=""
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.
 S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")
 S ORVAL=$$CHKRNG(ORVAL,999)
 S VAL=ORVAL_U,ORVAL=""
 S ORVAL=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")
 S ORVAL=$$CHKRNG(ORVAL,999)
 S VAL=VAL_ORVAL```




 Generated on January 14th 2017, 7:26:36 am