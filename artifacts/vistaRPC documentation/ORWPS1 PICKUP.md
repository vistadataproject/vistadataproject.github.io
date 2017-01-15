---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS1 PICKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS1 PICKUP{:/}
 tag | {::nomarkdown}PICKUP{:/}
 routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns default for refill location (mail or window).{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PICKUP^[ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 Method comment | Return default for refill location
 Code | {::nomarkdown}  I $D(^PSX(550,"C")) S Y="M"<br> E  S Y="W"{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}