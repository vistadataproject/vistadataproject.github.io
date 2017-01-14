---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD DELDFLT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD DELDFLT{:/}
 tag | {::nomarkdown}DELDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete user level's specific health summary component setting( date range and max occurences){:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DELDFLT^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Delete user's default setting 
 Code | ```  N ORERR S ORERR=""
 D NDEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS INDV",.ORERR)
 D DEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,.ORERR)
 K ORERR```




 Generated on January 14th 2017, 7:26:35 am