---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX NEW REMINDERS ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX NEW REMINDERS ACTIVE{:/}
 tag | {::nomarkdown}NEWACTIV{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if Interactive Reminders are active, otherwise return 0.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NEWACTIV^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Return true if Interactive Reminders are active
 Code | {::nomarkdown}  S ORY=0<br> I $T(APPL^PXRMRPCA)'="",+$G(DUZ) D<br> . N SRV<br> . ;S SRV=$P($G(^VA(200,DUZ,5)),U)<br> . S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br> . S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","PXRM GUI REMINDERS ACTIVE",1,"Q")<br> . I +ORY S ORY=1<br> . E  S ORY=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}