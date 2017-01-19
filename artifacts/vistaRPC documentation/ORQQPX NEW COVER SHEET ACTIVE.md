---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX NEW COVER SHEET ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW COVER SHEET ACTIVE{:/}
 tag | {::nomarkdown}NEWCVOK{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns TRUE if the new cover sheet parameters are to be used.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | NEWCVOK^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Returns status of 
 Code | {::nomarkdown}  N SRV,ORERR,ORTMP<br> S ORY=0,SRV=$$GET1^DIQ(200,DUZ,29,"I")<br> D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX NEW REMINDER PARAMS","Q",.ORERR)<br> I +ORTMP S ORY=$P($G(ORTMP(1)),U,2){:/}


### CPRS

[rReminders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}