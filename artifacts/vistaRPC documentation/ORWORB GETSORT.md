---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB GETSORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB GETSORT{:/}
 tag | {::nomarkdown}GETSORT{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the method for sorting GUI alert display.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return notification sort method^direction for user/division/system/pkg
 Lines | ```
 S ORY=$$GET^XPAR("ALL","ORB SORT METHOD",1,"I")_U_$$GET^XPAR("ALL","ORB SORT DIRECTION",1,"I")```




 Generated on January 13th 2017, 6:55:29 am