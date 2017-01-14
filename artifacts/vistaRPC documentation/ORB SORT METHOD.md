---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORB SORT METHOD 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORB SORT METHOD{:/}
 tag | {::nomarkdown}SORT{:/}
 routine | [ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the default sort method for notification display based on the precedence USER, DIVISION, SYSTEM, PACKAGE.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SORT^[ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
 Method comment | return notification sort method for user/division/system/pkg
 Code | ```  S ORY=$$GET^XPAR("USR^DIV^SYS^PKG","ORB SORT METHOD",1,"I")```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}