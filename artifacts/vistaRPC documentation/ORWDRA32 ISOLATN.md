---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDRA32 ISOLATN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDRA32 ISOLATN{:/}
 tag | {::nomarkdown}ISOLATN{:/}
 routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is patient on isolation procedures?
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 N ORVP
 S ORVP=DFN_";DPT("
 S Y=$$IP^ORMBLD```




 Generated on January 13th 2017, 6:55:29 am