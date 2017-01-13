---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA DCREQIEN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA DCREQIEN{:/}
 tag | {::nomarkdown}DCREQIEN{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the IEN for Requesting Physician Cancelled reason.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return IEN for Req Phys Cancelled reason
 Lines | ```
 S VAL=$O(^ORD(100.03,"S","REQ",0))```




 Generated on January 13th 2017, 6:55:29 am