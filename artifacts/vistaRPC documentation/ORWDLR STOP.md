---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR STOP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR STOP{:/}
 tag | {::nomarkdown}STOP{:/}
 routine | [ORWDLR](http://code.osehra.org/dox/Routine_ORWDLR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Calculates a stop date (for lab orders with schedules).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return a calculated stop date
 Input Parameters | {::nomarkdown}X2{:/}
 Lines | ```
 N X1,X
 S X1=DT D C^%DTC S VAL=X
```




 Generated on January 13th 2017, 6:55:28 am