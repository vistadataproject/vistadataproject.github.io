---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETCSDEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETCSDEF{:/}
 tag | {::nomarkdown}GETCSDEF{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get Div/Sys/Pkg Cover Sheet default range parameters.
 Lines | ```
 N ORVAL
 S ORVAL=""
 S ORVAL=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")
 S ORVAL=$$CHKRNG(ORVAL,999)
 S INFO=ORVAL_U,ORVAL=""
 S ORVAL=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")
 S ORVAL=$$CHKRNG(ORVAL,999)
 S INFO=INFO_ORVAL```




 Generated on January 13th 2017, 6:55:29 am