---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPO CSARNGD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPO CSARNGD{:/}
 tag | {::nomarkdown}CSARNGD{:/}
 routine | [ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CSARNGD^[ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}<pre> get start, stop defaults</pre>{:/}
 Code | {::nomarkdown}  S INFO=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")_U<br> S INFO=INFO_$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}