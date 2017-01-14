---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 CHK94 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 CHK94{:/}
 tag | {::nomarkdown}CHK94{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return 1 if patch 94 has been installed
 Lines | {::nomarkdown} S VAL=0<br/> I $O(^ORD(101.41,"B","PS MEDS",0)) S VAL=1{:/}




 Generated on January 13th 2017, 7:15:28 am