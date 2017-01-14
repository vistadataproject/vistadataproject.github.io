---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORDEA PINLKSET 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PINLKSET{:/}
 tag | {::nomarkdown}PINLKSET{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PINLKSET^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | set a PIN lock on the current user
 Code | ```  S ^XTMP("OR DEA PIN LOCK",0)=$$FMADD^XLFDT($$NOW^XLFDT,2)_U_$$NOW^XLFDT
 S ^XTMP("OR DEA PIN LOCK",DUZ)=$$NOW^XLFDT
 S ORY=^XTMP("OR DEA PIN LOCK",DUZ)```




 Generated on January 14th 2017, 7:26:36 am