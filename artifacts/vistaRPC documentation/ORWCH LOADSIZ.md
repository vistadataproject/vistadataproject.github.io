---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH LOADSIZ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH LOADSIZ{:/}
 tag | {::nomarkdown}LOADSIZ{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC loads the size (bounds) for a particular CPRS GUI control. {:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOADSIZ^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | return the bounds for a particular control
 Input parameters | {::nomarkdown}NAM{:/}
 Code | {::nomarkdown}  I NAM="" S VAL="" Q<br> S VAL=$$GET^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,"I"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}