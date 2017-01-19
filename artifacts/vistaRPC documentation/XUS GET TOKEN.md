---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS GET TOKEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET TOKEN{:/}
 tag | {::nomarkdown}ASH{:/}
 routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ASH^[XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 Method comment | rpc. Auto Signon Handle
 Code | {::nomarkdown}  N HDL<br> S RET="NOT AUTHENTICATED"<br> I $G(DUZ)<1 Q  ;Not an authenticated user<br> I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user<br> S HDL=$$HANDLE("XWBAS",1),RET="~1"_HDL<br> D TOK(HDL){:/}


### CPRS

[Executable Only]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}