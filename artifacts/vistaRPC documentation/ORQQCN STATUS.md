---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN STATUS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN STATUS{:/}
 tag | {::nomarkdown}STATUS{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of consult statuses currently in use, as reflected in the\AC\ XREF of ^GMR(123.1.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | STATUS^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Returns a list of statuses currently in use
 Code | ```  N GMRCORST<br/> S GMRCORST=0,Y(999)="999^OTHER^"<br/> F  S GMRCORST=$O(^ORD(100.01,GMRCORST)) Q:'+GMRCORST  D<br/> . I '$D(^GMR(123.1,"AC",GMRCORST)) S Y(999)=Y(999)_GMRCORST_"," Q<br/> . Q:$$SCREEN^XTID(100.01,,GMRCORST_",")  ;inactive VUID<br/> . S Y(GMRCORST)=GMRCORST_U_$P(^ORD(100.01,GMRCORST,0),U,1)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}