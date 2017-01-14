---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 ISSPLY 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 ISSPLY{:/}
 tag | {::nomarkdown}ISSPLY{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return 1 if orderable item is a supply, otherwise return 0.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISSPLY^[ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 Method comment | return true if orderable item is a supply
 Input parameters | {::nomarkdown}IEN{:/}
 Code | ```  S VAL=0<br/> I $P($G(^ORD(101.43,IEN,"PS")),U,5)=1 S VAL=1```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}