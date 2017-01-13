---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCN32 ORDRMSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 ORDRMSG{:/}
 tag | {::nomarkdown}ORDRMSG{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | returns order message for this consult/procedure orderable
 Input Parameters | {::nomarkdown}ORDITM{:/}
 Lines | {::nomarkdown} N I<br/> S I=0 F  S I=$O(^ORD(101.43,ORDITM,8,I)) Q:I'>0  S Y(I)=^(I,0){:/}




 Generated on January 13th 2017, 7:15:27 am