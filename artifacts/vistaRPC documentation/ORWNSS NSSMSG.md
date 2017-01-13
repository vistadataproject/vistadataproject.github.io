---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWNSS NSSMSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWNSS NSSMSG{:/}
 tag | {::nomarkdown}NSSMSG{:/}
 routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve site message for None-Standard Schedule
 Lines | ```{::nomarkdown} N ORSRV<br/> S ORY=""<br/> S ORSRV=$G(^VA(200,DUZ,5)) I +ORSRV>0 S ORSRV=$P(ORSRV,U)<br/> S ORY=$$GET^XPAR("SRV.`"_+$G(ORSRV)_"^DIV^SYS","ORWIM NSS MESSAGE",1,"I")```{:/}




 Generated on January 13th 2017, 7:11:27 am