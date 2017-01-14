---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORDG MAPSEQ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORDG MAPSEQ{:/}
 tag | {::nomarkdown}MAPSEQ{:/}
 routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | similar to GRPSEQB, for 32bit
 Lines | {::nomarkdown} N C,I,X<br/> D GRPSEQ(.X)<br/> S C=0,I=0<br/> F  S I=$O(X(I)) Q:I=""  S C=C+1,Y(C)=I_"="_X(I)_U_$P(^ORD(100.98,I,0),U,2){:/}




 Generated on January 13th 2017, 7:15:27 am