---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD DELDFLT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD DELDFLT{:/}
 tag | {::nomarkdown}DELDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete user level's specific health summary component setting( date range and max occurences){:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Delete user's default setting 
 Lines | ```
 N ORERR S ORERR=""
 D NDEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",.ORERR)
 D DEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,.ORERR)
 K ORERR```




 Generated on January 13th 2017, 6:55:29 am