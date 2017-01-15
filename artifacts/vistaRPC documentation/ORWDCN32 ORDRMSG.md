---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCN32 ORDRMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 ORDRMSG{:/}
 tag | {::nomarkdown}ORDRMSG{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ORDRMSG^[ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 Method comment | returns order message for this consult/procedure orderable
 Input parameters | {::nomarkdown}ORDITM{:/}
 Code | {::nomarkdown}  N I<br> S I=0 F  S I=$O(^ORD(101.43,ORDITM,8,I)) Q:I'>0  S Y(I)=^(I,0){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}