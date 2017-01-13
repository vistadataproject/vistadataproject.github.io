---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL SRVC SRCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL SRVC SRCH{:/}
 tag | {::nomarkdown}SRVCSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}gET LIST OF AVAILABLE SERVICES{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GET LIST OF SERVICES
 Input Parameters | {::nomarkdown}FROM<br/>DIR<br/>ALL{:/}
 Lines | ```
 N I,IEN,CNT S I=0,CNT=44
 F  Q:I=CNT  S FROM=$O(^DIC(49,"B",FROM),DIR) Q:FROM=""  D
 . S IEN=$O(^DIC(49,"B",FROM,0)) I '$G(ALL),$P(^DIC(49,IEN,0),U,9)'="C" Q
 . S I=I+1,Y(I)=IEN_"^"_FROM```




 Generated on January 13th 2017, 6:55:28 am