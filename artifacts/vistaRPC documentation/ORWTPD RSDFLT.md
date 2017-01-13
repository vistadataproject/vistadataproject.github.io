---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD RSDFLT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD RSDFLT{:/}
 tag | {::nomarkdown}RSDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}get system or package level default setting for all repors.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Retrieve sys/pkg level default time/occ setting
 Lines | ```
 N VALUE
 S Y=$$GET^XPAR("DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")```




 Generated on January 13th 2017, 6:55:29 am