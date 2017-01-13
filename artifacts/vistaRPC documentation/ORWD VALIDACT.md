---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD VALIDACT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD VALIDACT{:/}
 tag | {::nomarkdown}VALIDACT{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if action is valid for an order, otherwise 0^error.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}ORIFN<br/>ACTION{:/}
 Lines | ```
 S VAL=$$VALID^ORCACT0(ORIFN,ACTION,.ERR)
 I VAL=0 S VAL=VAL_U_ERR```
 Leading comment lines | {::nomarkdown}Return 1 if action is valid for this order, otherwise 0^error{:/}




 Generated on January 13th 2017, 6:55:28 am