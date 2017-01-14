---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD SUDF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD SUDF{:/}
 tag | {::nomarkdown}SUDF{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set user level default time/occ limits for all reports{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SUDF^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Set user default for all CPRS reports
 Input parameters | {::nomarkdown}VALUE{:/}
 Code | ```  N ORERR S ORERR=""
 I VALUE=$$GET^XPAR("DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I") D DEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,.ORERR) K ORERR Q
 E  D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,VALUE,.ORERR)
 S Y=1
 K ORERR,VALUES1```




 Generated on January 14th 2017, 7:26:35 am