---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQORB SORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQORB SORT{:/}
 tag | {::nomarkdown}SORT{:/}
 routine | [ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the notification sort method for user/division/system/pkg.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return notification sort method for user/division/system/pkg
 Lines | ```
 S ORY=$$GET^XPAR("USR^DIV^SYS^PKG","ORB SORT METHOD",1,"I")```




 Generated on January 13th 2017, 6:55:29 am