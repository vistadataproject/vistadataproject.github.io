---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB STATALOW 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB STATALOW{:/}
 tag | {::nomarkdown}STATALOW{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check to see if user is allowed to order STAT orders through VBECS.Checks users with parameter: OR VBECS STAT USER{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Allow stat for ORES ORELSE users
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 S OROOT=$D(^XUSEC("ORES",DUZ))!($D(^XUSEC("ORELSE",DUZ)))```




 Generated on January 13th 2017, 6:55:29 am