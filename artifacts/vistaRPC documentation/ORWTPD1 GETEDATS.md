---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETEDATS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETEDATS{:/}
 tag | {::nomarkdown}GETEDATS{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETEDATS^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Get user's (all levels) Encounter app't date range params.
 Code | ```  N ORSRV,ORUSER<br/> S ORUSER=DUZ<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U) ; Get S/S.<br/> S INFO=$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQEAPT ENC APPT START",1,"I")_U<br/> S INFO=INFO_$$GET^XPAR("USR.`"_ORUSER_"^SRV.`"_+$G(ORSRV)_"^DIV^SYS^PKG","ORQQEAPT ENC APPT STOP",1,"I")```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}