---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX GET FOLDERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET FOLDERS{:/}
 tag | {::nomarkdown}GETFLDRS{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return Visible Reminder Folders
 Lines | {::nomarkdown} N SRV,ORERR,ORTMP<br/> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX REMINDER FOLDERS","Q",.ORERR)<br/> I +ORTMP S ORFLDRS=$P($G(ORTMP(1)),U,2)<br/> E  S ORFLDRS="DAO"{:/}
 Leading comment lines | {::nomarkdown}Codes: D=Due, A=Applicable, N=Not Applicable, E=Evaluated, O=Other{:/}




 Generated on January 13th 2017, 7:15:28 am