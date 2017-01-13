---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS GET TOKEN 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET TOKEN{:/}
 tag | {::nomarkdown}ASH{:/}
 routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | rpc. Auto Signon Handle
 Lines | ```
 N HDL
 S RET="NOT AUTHENTICATED"
 I $G(DUZ)<1 Q  ;Not an authenticated user
 I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user
 S HDL=$$HANDLE("XWBAS",1),RET="~1"_HDL
 D TOK(HDL)```




 Generated on January 13th 2017, 6:55:29 am