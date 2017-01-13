---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ALLSPEC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ALLSPEC{:/}
 tag | {::nomarkdown}ALLSPEC{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of specimens from the TOPOGRAPHY FIELD file (#61).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a set of specimens from topography file
 Input Parameters | {::nomarkdown}FROM<br/>DIR{:/}
 Lines | ```
 N I,IEN,CNT,A,%,NOW,B
 D NOW^%DTC S NOW=$P(%,".")
 S I=0,CNT=44
 F  Q:I'<CNT  S FROM=$O(^LAB(61,"B",FROM),DIR) Q:FROM=""  D
 . S IEN=0 F  S IEN=$O(^LAB(61,"B",FROM,IEN)) Q:'IEN  D
 . . S A=$G(^LAB(61,IEN,64.91)) S B=$P(A,"^",3) I B]"",B'>NOW Q
 . . S I=I+1,Y(I)=IEN_U_FROM_"  ("_$P($G(^LAB(61,IEN,0)),U,2)_")"```




 Generated on January 13th 2017, 6:55:29 am