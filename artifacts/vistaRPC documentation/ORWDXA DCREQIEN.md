---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXA DCREQIEN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA DCREQIEN{:/}
 tag | {::nomarkdown}DCREQIEN{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return the IEN for Requesting Physician Cancelled reason.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DCREQIEN^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Return IEN for Req Phys Cancelled reason
 Code | ```  S VAL=$O(^ORD(100.03,"S","REQ",0))```




 Generated on January 14th 2017, 7:26:35 am