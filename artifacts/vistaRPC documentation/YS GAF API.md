---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YS GAF API 

 property | value 
--- | --- 
 label | {::nomarkdown}YS GAF API{:/}
 tag | {::nomarkdown}GAFHX{:/}
 routine | [YSGAFAPI](http://code.osehra.org/dox/Routine_YSGAFAPI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}YS{:/}
 Lines | ```
 N YSBEG,YSEND,YSLIMIT
 K YSDATA
 D PARSE(.YS)
 I DFN'>0 S YSDATA(1)="[ERROR]",YSDATA(2)="No dfn" Q
 S YSDATA(1)="[DATA]"
 S N=1
 D HXLP```




 Generated on January 13th 2017, 6:55:29 am