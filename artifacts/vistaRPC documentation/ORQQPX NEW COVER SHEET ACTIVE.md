---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX NEW COVER SHEET ACTIVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW COVER SHEET ACTIVE{:/}
 tag | {::nomarkdown}NEWCVOK{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the new cover sheet parameters are to be used.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns status of 
 Lines | ```
 N SRV,ORERR,ORTMP
 S ORY=0,SRV=$$GET1^DIQ(200,DUZ,29,"I")
 D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX NEW REMINDER PARAMS","Q",.ORERR)
 I +ORTMP S ORY=$P($G(ORTMP(1)),U,2)```




 Generated on January 13th 2017, 6:55:29 am