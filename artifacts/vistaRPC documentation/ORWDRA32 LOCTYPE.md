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
 Lines | ```{::nomarkdown} S Y=-1<br/> Q:$G(ORLOC)=""<br/> S Y=$P($G(^SC(+$G(ORLOC),0)),U,3)<br/>```{:/}




 Generated on January 13th 2017, 7:11:27 am