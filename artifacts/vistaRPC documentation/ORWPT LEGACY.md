---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT LEGACY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LEGACY{:/}
 tag | {::nomarkdown}LEGACY{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns message if patient has data on a legacy system.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return message if data on the legacy system
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 S ORLST(0)=0
 I $L($T(HXDATA^A7RDPAGU)) D
 . D HXDATA^A7RDPAGU(.ORLST,DFN)
 . I $O(ORLST(0)) S ORLST(0)=1```
 Leading comment lines | {::nomarkdown}ORLST(0)=1 if data,  ORLST(n)=display message if data{:/}




 Generated on January 13th 2017, 6:55:29 am