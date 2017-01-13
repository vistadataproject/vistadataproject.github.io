---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPO CSARNGD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPO CSARNGD{:/}
 tag | {::nomarkdown}CSARNGD{:/}
 routine | [ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC
 Lines | ```
 S INFO=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")_U
 S INFO=INFO_$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")```
 Leading comment lines | {::nomarkdown}get start, stop defaults{:/}




 Generated on January 13th 2017, 6:55:29 am