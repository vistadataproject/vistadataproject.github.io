---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD GETDFLT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETDFLT{:/}
 tag | {::nomarkdown}GETDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}get default setting for all reports(time/occ limits){:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDFLT^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Get default time/occ limits for all reports
 Code | ```  N VALUE
 S Y=$$GET^XPAR("USR.`"_DUZ_"^DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")
 K VALUE```




 Generated on January 14th 2017, 7:26:35 am