---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH SAVESIZ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH SAVESIZ{:/}
 tag | {::nomarkdown}SAVESIZ{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC saves the size (bounds) for a particular CPRS GUI control.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVESIZ^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | save the bounds for a particular control
 First comment | {::nomarkdown}<pre> NAM=frmName or frmName.ctrlName  VAL=left,top,width,height</pre>{:/}
 Input parameters | {::nomarkdown}NAM<br>VAL{:/}
 Code | {::nomarkdown}  D EN^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,VAL,.ORERR){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}