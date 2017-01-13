---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX MSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX MSG{:/}
 tag | {::nomarkdown}MSG{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return message text for an orderable item.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Msg text for orderable item
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```
 N I
 S I=0 F  S I=$O(^ORD(101.43,IEN,8,I)) Q:I'>0  S LST(I)=^(I,0)```




 Generated on January 13th 2017, 6:55:29 am