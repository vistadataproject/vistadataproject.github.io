---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD1 GETCSDEF 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD1 GETCSDEF{:/}
 tag | {::nomarkdown}GETCSDEF{:/}
 routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETCSDEF^[ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
 Method comment | Get Div/Sys/Pkg Cover Sheet default range parameters.
 Code | ```  N ORVAL<br/> S ORVAL=""<br/> S ORVAL=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")<br/> S ORVAL=$$CHKRNG(ORVAL,999)<br/> S INFO=ORVAL_U,ORVAL=""<br/> S ORVAL=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")<br/> S ORVAL=$$CHKRNG(ORVAL,999)<br/> S INFO=INFO_ORVAL```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}