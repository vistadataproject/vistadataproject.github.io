---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DFLTEVT 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DFLTEVT{:/}
 tag | {::nomarkdown}DFLTEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return default release event based on provider IFN
 Input Parameters | {::nomarkdown}PVIFN{:/}
 Lines | ```
 N CMEVTLST,IDX
 S CMEVTLST="",IDX=0
 D GETLST^OREV3(.CMEVTLST)
 F  S IDX=$O(CMEVTLST(IDX)) Q:'IDX  D
 . I $P($G(CMEVTLST(IDX)),U,2) S ORY=$P($G(CMEVTLST(IDX)),U) Q```




 Generated on January 13th 2017, 6:55:29 am