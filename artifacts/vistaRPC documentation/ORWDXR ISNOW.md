---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ISNOW 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISNOW{:/}
 tag | {::nomarkdown}ISNOW{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is first time now order?
 Input Parameters | {::nomarkdown}ORID{:/}
 Lines | {::nomarkdown} N SCH<br/> Q:'$D(^OR(100,+ORID,0))<br/> S SCH=""<br/> S SCH=$O(^OR(100,+ORID,4.5,"ID","SCHEDULE",0))<br/> S:SCH SCH=$G(^OR(100,+ORID,4.5,SCH,1))<br/> S:SCH="NOW" ORY=1<br/>{:/}




 Generated on January 13th 2017, 7:15:28 am