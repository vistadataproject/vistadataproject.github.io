---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX SET FOLDERS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX SET FOLDERS{:/}
 tag | {::nomarkdown}SETFLDRS{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Sets Visible Reminder Folders for the current user
 Input Parameters | {::nomarkdown}ORFLDRS{:/}
 Lines | ```
 N ORERR
 D EN^XPAR(DUZ_";VA(200,","ORQQPX REMINDER FOLDERS",1,ORFLDRS,.ORERR)
 S ORY=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORFLDRS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}String containing a one character code for each folder visible in thereminder tree structure of the CPRS GUI.Visible Folder Codes are:  D=Due  A=Applicable  N=Not Applicable  E=Evaluated  O=Other{:/} | 




 Generated on January 13th 2017, 6:55:29 am