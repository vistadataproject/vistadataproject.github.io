---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPT LEGACY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT LEGACY{:/}
 tag | {::nomarkdown}LEGACY{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns message if patient has data on a legacy system.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LEGACY^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | return message if data on the legacy system
 First comment | {::nomarkdown}ORLST(0)=1 if data,  ORLST(n)=display message if data{:/}
 Input parameters | {::nomarkdown}DFN{:/}
 Code | ```  S ORLST(0)=0
 I $L($T(HXDATA^A7RDPAGU)) D
 . D HXDATA^A7RDPAGU(.ORLST,DFN)
 . I $O(ORLST(0)) S ORLST(0)=1```




 Generated on January 14th 2017, 7:26:35 am