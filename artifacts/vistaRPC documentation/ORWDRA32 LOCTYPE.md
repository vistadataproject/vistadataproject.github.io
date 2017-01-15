---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 LOCTYPE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 LOCTYPE{:/}
 tag | {::nomarkdown}LOCTYPE{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | LOCTYPE^[ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 Method comment | Returns type of location (C,W)
 Input parameters | {::nomarkdown}ORLOC{:/}
 Code | {::nomarkdown}  S Y=-1<br> Q:$G(ORLOC)=""<br> S Y=$P($G(^SC(+$G(ORLOC),0)),U,3)<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}