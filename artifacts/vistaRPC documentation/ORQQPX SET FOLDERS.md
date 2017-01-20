---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX SET FOLDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX SET FOLDERS{:/}
 tag | {::nomarkdown}SETFLDRS{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORFLDRS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}String containing a one character code for each folder visible in thereminder tree structure of the CPRS GUI.Visible Folder Codes are:  D=Due  A=Applicable  N=Not Applicable  E=Evaluated  O=Other{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SETFLDRS^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Sets Visible Reminder Folders for the current user
 Input parameters | {::nomarkdown}ORFLDRS{:/}
 Code | {::nomarkdown}  N ORERR<br> D EN^XPAR(DUZ_";VA(200,","ORQQPX REMINDER FOLDERS",1,ORFLDRS,.ORERR)<br> S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}