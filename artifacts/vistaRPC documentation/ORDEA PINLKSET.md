---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA PINLKSET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PINLKSET{:/}
 tag | {::nomarkdown}PINLKSET{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PINLKSET^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | set a PIN lock on the current user
 Code | {::nomarkdown}  S ^XTMP("OR DEA PIN LOCK",0)=$$FMADD^XLFDT($$NOW^XLFDT,2)_U_$$NOW^XLFDT<br> S ^XTMP("OR DEA PIN LOCK",DUZ)=$$NOW^XLFDT<br> S ORY=^XTMP("OR DEA PIN LOCK",DUZ){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}