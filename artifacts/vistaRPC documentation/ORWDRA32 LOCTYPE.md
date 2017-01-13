---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 LOCTYPE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 LOCTYPE{:/}
 tag | {::nomarkdown}LOCTYPE{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns type of location (C,W)
 Input Parameters | {::nomarkdown}ORLOC{:/}
 Lines | ```
 S Y=-1
 Q:$G(ORLOC)=""
 S Y=$P($G(^SC(+$G(ORLOC),0)),U,3)
```




 Generated on January 13th 2017, 6:55:29 am