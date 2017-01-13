---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCSLT LOOK200 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCSLT LOOK200{:/}
 tag | {::nomarkdown}LOOK200{:/}
 routine | [ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validates Attn: field of a consult order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Lookup a person in 200
 Input Parameters | {::nomarkdown}X{:/}
 Lines | ```
 S VAL=$$FIND1^DIC(200,"","",X)
```




 Generated on January 13th 2017, 6:55:28 am