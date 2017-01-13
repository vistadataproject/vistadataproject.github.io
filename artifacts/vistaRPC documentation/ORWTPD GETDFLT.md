---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD GETDFLT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETDFLT{:/}
 tag | {::nomarkdown}GETDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}get default setting for all reports(time/occ limits){:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get default time/occ limits for all reports
 Lines | ```
 N VALUE
 S Y=$$GET^XPAR("USR.`"_DUZ_"^DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")
 K VALUE```




 Generated on January 13th 2017, 6:55:29 am