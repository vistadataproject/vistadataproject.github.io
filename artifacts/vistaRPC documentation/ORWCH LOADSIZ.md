---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH LOADSIZ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH LOADSIZ{:/}
 tag | {::nomarkdown}LOADSIZ{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC loads the size (bounds) for a particular CPRS GUI control. {:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return the bounds for a particular control
 Input Parameters | {::nomarkdown}NAM{:/}
 Lines | ```{::nomarkdown} I NAM="" S VAL="" Q<br/> S VAL=$$GET^XPAR(DUZ_";VA(200,","ORWCH BOUNDS",NAM,"I")```{:/}




 Generated on January 13th 2017, 7:11:27 am