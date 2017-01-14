---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPX NEW COVER SHEET ACTIVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW COVER SHEET ACTIVE{:/}
 tag | {::nomarkdown}NEWCVOK{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the new cover sheet parameters are to be used.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NEWCVOK^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns status of 
 Code | ```  N SRV,ORERR,ORTMP
 S ORY=0,SRV=$$GET1^DIQ(200,DUZ,29,"I")
 D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX NEW REMINDER PARAMS","Q",.ORERR)
 I +ORTMP S ORY=$P($G(ORTMP(1)),U,2)```




 Generated on January 14th 2017, 7:26:35 am