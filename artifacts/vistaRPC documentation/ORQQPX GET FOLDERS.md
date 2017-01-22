---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX GET FOLDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET FOLDERS{:/}
 tag | {::nomarkdown}GETFLDRS{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETFLDRS^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Return Visible Reminder Folders
 First comment | {::nomarkdown}<pre> Codes: D=Due, A=Applicable, N=Not Applicable, E=Evaluated, O=Other</pre>{:/}
 Code | {::nomarkdown}  N SRV,ORERR,ORTMP<br> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br> D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX REMINDER FOLDERS","Q",.ORERR)<br> I +ORTMP S ORFLDRS=$P($G(ORTMP(1)),U,2)<br> E  S ORFLDRS="DAO"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}