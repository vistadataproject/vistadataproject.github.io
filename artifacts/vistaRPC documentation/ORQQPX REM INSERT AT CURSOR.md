---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPX REM INSERT AT CURSOR 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX REM INSERT AT CURSOR{:/}
 tag | {::nomarkdown}INSCURS{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if text generated from a reminder dialog, when processinga reminder, is to be inserted at the current cursor location, ratherthan at the bottom of the note.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | INSCURS^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns status of ORQQPX REMINDER TEXT AT CURSOR
 Code | ```  N SRV,ORERR,ORTMP
 S ORY=0,SRV=$$GET1^DIQ(200,DUZ,29,"I")
 D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX REMINDER TEXT AT CURSOR","Q",.ORERR)
 I +ORTMP S ORY=$P($G(ORTMP(1)),U,2)```




 Generated on January 14th 2017, 7:26:35 am