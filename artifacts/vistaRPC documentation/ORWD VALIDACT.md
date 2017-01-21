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

 Property | Value 
 --- | --- 
 Method | VALIDACT^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 Input parameters | {::nomarkdown}ORIFN, ACTION{:/}
 First comment | {::nomarkdown}<pre> Return 1 if action is valid for this order, otherwise 0^error</pre>{:/}
 Code | {::nomarkdown}  S VAL=$$VALID^ORCACT0(ORIFN,ACTION,.ERR)<br> I VAL=0 S VAL=VAL_U_ERR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}