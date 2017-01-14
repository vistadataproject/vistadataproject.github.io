---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPX GET FOLDERS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET FOLDERS{:/}
 tag | {::nomarkdown}GETFLDRS{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETFLDRS^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Return Visible Reminder Folders
 First comment | {::nomarkdown}Codes: D=Due, A=Applicable, N=Not Applicable, E=Evaluated, O=Other{:/}
 Code | ```  N SRV,ORERR,ORTMP
 S SRV=$$GET1^DIQ(200,DUZ,29,"I")
 D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX REMINDER FOLDERS","Q",.ORERR)
 I +ORTMP S ORFLDRS=$P($G(ORTMP(1)),U,2)
 E  S ORFLDRS="DAO"```




 Generated on January 14th 2017, 7:26:35 am