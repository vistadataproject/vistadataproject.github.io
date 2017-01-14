---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD RSDFLT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD RSDFLT{:/}
 tag | {::nomarkdown}RSDFLT{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}get system or package level default setting for all repors.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RSDFLT^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Retrieve sys/pkg level default time/occ setting
 Code | ```  N VALUE
 S Y=$$GET^XPAR("DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I")```




 Generated on January 14th 2017, 7:26:35 am