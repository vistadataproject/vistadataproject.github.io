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

 Property | Value 
 --- | --- 
 Method | SAVESIZ^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | save the bounds for a particular control
 Input parameters | {::nomarkdown}NAM, VAL{:/}
 First comment | {::nomarkdown}<pre> NAM=frmName or frmName.ctrlName  VAL=left,top,width,height</pre>{:/}
 Code | {::nomarkdown}  D EN^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,VAL,.ORERR){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fMeds.pas">fMeds.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}