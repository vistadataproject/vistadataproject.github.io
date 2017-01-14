---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 DELDFLT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DELDFLT{:/}
 tag | {::nomarkdown}DELDFLT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DELDFLT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Delete default release event
 Input parameters | {::nomarkdown}PVIFN{:/}
 Code | ```  Q:'PVIFN
 N ORERR
 S ORERR=""
 D DEL^XPAR(PVIFN_";VA(200,","OREVNT DEFAULT",1,.ORERR)```




 Generated on January 14th 2017, 7:26:35 am