---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA PINLKCHK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PINLKCHK{:/}
 tag | {::nomarkdown}PINLKCHK{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | check if the current user has an active PIN lock
 Lines | ```{::nomarkdown} S ORY=0<br/> Q:'$D(^XTMP("OR DEA PIN LOCK",DUZ))<br/> N ORDIFF<br/> S ORDIFF=$$FMDIFF^XLFDT($$NOW^XLFDT,$G(^XTMP("OR DEA PIN LOCK",DUZ)),2)<br/> I ORDIFF<900 S ORY=1```{:/}
 Leading comment lines | {::nomarkdown}ORY=1 if there is an active lock and ORY=0 if no active lock{:/}




 Generated on January 13th 2017, 7:11:27 am