---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD VALIDACT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWD VALIDACT{:/}
 tag | {::nomarkdown}VALIDACT{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns 1 if action is valid for an order, otherwise 0^error.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | VALIDACT^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}<pre> Return 1 if action is valid for this order, otherwise 0^error</pre>{:/}
 Input parameters | {::nomarkdown}ORIFN<br>ACTION{:/}
 Code | {::nomarkdown}  S VAL=$$VALID^ORCACT0(ORIFN,ACTION,.ERR)<br> I VAL=0 S VAL=VAL_U_ERR{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}