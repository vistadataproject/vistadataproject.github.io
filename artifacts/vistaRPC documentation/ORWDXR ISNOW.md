---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXR ISNOW 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISNOW{:/}
 tag | {::nomarkdown}ISNOW{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISNOW^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Is first time now order?
 Input parameters | {::nomarkdown}ORID{:/}
 Code | ```  N SCH
 Q:'$D(^OR(100,+ORID,0))
 S SCH=""
 S SCH=$O(^OR(100,+ORID,4.5,"ID","SCHEDULE",0))
 S:SCH SCH=$G(^OR(100,+ORID,4.5,SCH,1))
 S:SCH="NOW" ORY=1
```




 Generated on January 14th 2017, 7:26:35 am