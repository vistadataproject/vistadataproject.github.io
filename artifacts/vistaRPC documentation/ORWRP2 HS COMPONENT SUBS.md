---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMPONENT SUBS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMPONENT SUBS{:/}
 tag | {::nomarkdown}COMPSUB{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of ADHOC Health Summary subcomponents.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get subitems from a predefined Adhoc component
 Input Parameters | {::nomarkdown}ORSUB{:/}
 Lines | ```
 I '$L($T(COMPSUB^GMTSADH5)) Q
 D COMPSUB^GMTSADH5(.ORY,ORSUB)```




 Generated on January 13th 2017, 6:55:29 am