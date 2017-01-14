---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DELDFLT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DELDFLT{:/}
 tag | {::nomarkdown}DELDFLT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Delete default release event
 Input Parameters | {::nomarkdown}PVIFN{:/}
 Lines | {::nomarkdown} Q:'PVIFN<br/> N ORERR<br/> S ORERR=""<br/> D DEL^XPAR(PVIFN_";VA(200,","OREVNT DEFAULT",1,.ORERR){:/}




 Generated on January 13th 2017, 7:15:28 am