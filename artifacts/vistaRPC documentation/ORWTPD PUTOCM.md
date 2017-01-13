---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD PUTOCM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD PUTOCM{:/}
 tag | {::nomarkdown}PUTOCM{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Set value of "ORCH CONTEXT MEDS"
 Input Parameters | {::nomarkdown}ORVAL{:/}
 Lines | ```
 I '$L(ORVAL) D DEL^XPAR("USR.`"_DUZ,"ORCH CONTEXT MEDS",1) Q
 N ORERR S ORERR=""
 D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT MEDS",1,ORVAL,.ORERR)
 S ORY=ORERR
```




 Generated on January 13th 2017, 6:55:29 am