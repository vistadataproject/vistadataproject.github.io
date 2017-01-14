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
 Lines | {::nomarkdown} N HDL<br/> S RET="NOT AUTHENTICATED"<br/> I $G(DUZ)<1 Q  ;Not an authenticated user<br/> I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user<br/> S HDL=$$HANDLE("XWBAS",1),RET="~1"_HDL<br/> D TOK(HDL){:/}




 Generated on January 13th 2017, 7:15:27 am