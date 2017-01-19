---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMPONENT SUBS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMPONENT SUBS{:/}
 tag | {::nomarkdown}COMPSUB{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of ADHOC Health Summary subcomponents.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | COMPSUB^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get subitems from a predefined Adhoc component
 Input parameters | {::nomarkdown}ORSUB{:/}
 Code | {::nomarkdown}  I '$L($T(COMPSUB^GMTSADH5)) Q<br> D COMPSUB^GMTSADH5(.ORY,ORSUB){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}