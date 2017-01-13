---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB SORT METHOD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORB SORT METHOD{:/}
 tag | {::nomarkdown}SORT{:/}
 routine | [ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the default sort method for notification display based on the precedence USER, DIVISION, SYSTEM, PACKAGE.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return notification sort method for user/division/system/pkg
 Lines | ```
 S ORY=$$GET^XPAR("USR^DIV^SYS^PKG","ORB SORT METHOD",1,"I")```




 Generated on January 13th 2017, 6:55:28 am