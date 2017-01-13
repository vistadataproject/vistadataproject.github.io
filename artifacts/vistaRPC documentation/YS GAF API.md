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
 Lines | ```{::nomarkdown} N YSBEG,YSEND,YSLIMIT<br/> K YSDATA<br/> D PARSE(.YS)<br/> I DFN'>0 S YSDATA(1)="[ERROR]",YSDATA(2)="No dfn" Q<br/> S YSDATA(1)="[DATA]"<br/> S N=1<br/> D HXLP```{:/}




 Generated on January 13th 2017, 7:11:26 am