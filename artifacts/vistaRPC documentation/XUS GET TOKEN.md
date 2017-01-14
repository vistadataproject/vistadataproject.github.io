---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; XUS GET TOKEN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET TOKEN{:/}
 tag | {::nomarkdown}ASH{:/}
 routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ASH^[XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 Method comment | rpc. Auto Signon Handle
 Code | ```  N HDL
 S RET="NOT AUTHENTICATED"
 I $G(DUZ)<1 Q  ;Not an authenticated user
 I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user
 S HDL=$$HANDLE("XWBAS",1),RET="~1"_HDL
 D TOK(HDL)```




 Generated on January 14th 2017, 7:26:35 am