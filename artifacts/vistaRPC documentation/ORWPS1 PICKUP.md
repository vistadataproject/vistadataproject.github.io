---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS1 PICKUP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS1 PICKUP{:/}
 tag | {::nomarkdown}PICKUP{:/}
 routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns default for refill location (mail or window).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return default for refill location
 Lines | {::nomarkdown} I $D(^PSX(550,"C")) S Y="M"<br/> E  S Y="W"{:/}




 Generated on January 13th 2017, 7:15:27 am