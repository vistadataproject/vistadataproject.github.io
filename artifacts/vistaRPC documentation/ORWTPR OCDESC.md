---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPR OCDESC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPR OCDESC{:/}
 tag | {::nomarkdown}OCDESC{:/}
 routine | [ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | from RPC
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```
 N CNT,LINE,NUM K TEXT
 S IEN=+$G(IEN) I IEN<1 Q
 S TEXT(1)=$P($G(^ORD(100.8,IEN,0)),U)
 S TEXT(2)=""
 S CNT=2
 S NUM=0 F  S NUM=$O(^ORD(100.8,IEN,1,NUM)) Q:NUM<1  S LINE=$G(^(NUM,0)) D
 .S CNT=CNT+1
 .S TEXT(CNT)=LINE
 S TEXT(CNT+1)=""```




 Generated on January 13th 2017, 6:55:29 am