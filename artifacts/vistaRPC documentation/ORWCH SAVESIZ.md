---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH SAVESIZ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH SAVESIZ{:/}
 tag | {::nomarkdown}SAVESIZ{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC saves the size (bounds) for a particular CPRS GUI control.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | save the bounds for a particular control
 Input Parameters | {::nomarkdown}NAM<br/>VAL{:/}
 Lines | {::nomarkdown} D EN^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,VAL,.ORERR){:/}
 Leading comment lines | {::nomarkdown}NAM=frmName or frmName.ctrlName  VAL=left,top,width,height{:/}




 Generated on January 13th 2017, 7:15:27 am