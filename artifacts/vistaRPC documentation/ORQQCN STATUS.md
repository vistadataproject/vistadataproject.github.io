---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN STATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN STATUS{:/}
 tag | {::nomarkdown}STATUS{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of consult statuses currently in use, as reflected in the\AC\ XREF of ^GMR(123.1.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns a list of statuses currently in use
 Lines | ```
 N GMRCORST
 S GMRCORST=0,Y(999)="999^OTHER^"
 F  S GMRCORST=$O(^ORD(100.01,GMRCORST)) Q:'+GMRCORST  D
 . I '$D(^GMR(123.1,"AC",GMRCORST)) S Y(999)=Y(999)_GMRCORST_"," Q
 . Q:$$SCREEN^XTID(100.01,,GMRCORST_",")  ;inactive VUID
 . S Y(GMRCORST)=GMRCORST_U_$P(^ORD(100.01,GMRCORST,0),U,1)```




 Generated on January 13th 2017, 6:55:29 am