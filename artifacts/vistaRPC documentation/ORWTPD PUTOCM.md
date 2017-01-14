---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD PUTOCM 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD PUTOCM{:/}
 tag | {::nomarkdown}PUTOCM{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PUTOCM^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Set value of "ORCH CONTEXT MEDS"
 Input parameters | {::nomarkdown}ORVAL{:/}
 Code | ```  I '$L(ORVAL) D DEL^XPAR("USR.`"_DUZ,"ORCH CONTEXT MEDS",1) Q
 N ORERR S ORERR=""
 D EN^XPAR(DUZ_";VA(200,","ORCH CONTEXT MEDS",1,ORVAL,.ORERR)
 S ORY=ORERR
```




 Generated on January 14th 2017, 7:26:35 am