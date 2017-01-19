---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB GETSORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB GETSORT{:/}
 tag | {::nomarkdown}GETSORT{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the method for sorting GUI alert display.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETSORT^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | return notification sort method^direction for user/division/system/pkg
 Code | {::nomarkdown}  S ORY=$$GET^XPAR("ALL","ORB SORT METHOD",1,"I")_U_$$GET^XPAR("ALL","ORB SORT DIRECTION",1,"I"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}