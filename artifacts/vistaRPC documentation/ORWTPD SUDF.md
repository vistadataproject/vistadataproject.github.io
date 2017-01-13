---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD SUDF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD SUDF{:/}
 tag | {::nomarkdown}SUDF{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set user level default time/occ limits for all reports{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Set user default for all CPRS reports
 Input Parameters | {::nomarkdown}VALUE{:/}
 Lines | ```{::nomarkdown} N ORERR S ORERR=""<br/> I VALUE=$$GET^XPAR("DIV^SYS^PKG","ORWRP TIME/OCC LIMITS ALL",1,"I") D DEL^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,.ORERR) K ORERR Q<br/> E  D EN^XPAR(DUZ_";VA(200,","ORWRP TIME/OCC LIMITS ALL",1,VALUE,.ORERR)<br/> S Y=1<br/> K ORERR,VALUES1```{:/}




 Generated on January 13th 2017, 7:11:27 am