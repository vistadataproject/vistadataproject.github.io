---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA ISACTOI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA ISACTOI{:/}
 tag | {::nomarkdown}ISACTOI{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is ord item active?
 Input Parameters | {::nomarkdown}OI{:/}
 Lines | ```
 I $G(^ORD(101.43,+OI,.1)),^(.1)'>$$NOW^XLFDT D
 . S ORY=$P($G(^ORD(101.43,OI,0)),U)_" has been inactivated and may not be ordered anymore."```




 Generated on January 13th 2017, 6:55:29 am