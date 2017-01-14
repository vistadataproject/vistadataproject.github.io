---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS1 CHK94 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 CHK94{:/}
 tag | {::nomarkdown}CHK94{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CHK94^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return 1 if patch 94 has been installed
 Code | ```  S VAL=0
 I $O(^ORD(101.41,"B","PS MEDS",0)) S VAL=1```




 Generated on January 14th 2017, 7:26:35 am