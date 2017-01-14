---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMPONENT SUBS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMPONENT SUBS{:/}
 tag | {::nomarkdown}COMPSUB{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of ADHOC Health Summary subcomponents.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | COMPSUB^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get subitems from a predefined Adhoc component
 Input parameters | {::nomarkdown}ORSUB{:/}
 Code | ```  I '$L($T(COMPSUB^GMTSADH5)) Q
 D COMPSUB^GMTSADH5(.ORY,ORSUB)```




 Generated on January 14th 2017, 7:26:35 am