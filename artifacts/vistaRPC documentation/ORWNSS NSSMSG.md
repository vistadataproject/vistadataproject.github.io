---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWNSS NSSMSG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWNSS NSSMSG{:/}
 tag | {::nomarkdown}NSSMSG{:/}
 routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NSSMSG^[ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 Method comment | Retrieve site message for None-Standard Schedule
 Code | ```  N ORSRV
 S ORY=""
 S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)
 S ORY=$$GET^XPAR("SRV.`"_+$G(ORSRV)_"^DIV^SYS","ORWIM NSS MESSAGE",1,"I")```




 Generated on January 14th 2017, 7:26:36 am