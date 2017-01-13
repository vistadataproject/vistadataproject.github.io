---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORBCMA5 GETUDID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORBCMA5 GETUDID{:/}
 tag | {::nomarkdown}GETUDID{:/}
 routine | [ORBCMA5](http://code.osehra.org/dox/Routine_ORBCMA5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get Unit/Dose Order Form ID
 Input Parameters | {::nomarkdown}INFO{:/}
 Lines | ```
 S Y=$O(^ORD(101.41,"B","PSJ OR PAT OE",0))
 S:$L(Y)<1 Y=0```




 Generated on January 13th 2017, 6:55:29 am