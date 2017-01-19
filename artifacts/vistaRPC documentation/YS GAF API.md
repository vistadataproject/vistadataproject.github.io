---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YS GAF API 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YS GAF API{:/}
 tag | {::nomarkdown}GAFHX{:/}
 routine | [YSGAFAPI](http://code.osehra.org/dox/Routine_YSGAFAPI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GAFHX^[YSGAFAPI](http://code.osehra.org/dox/Routine_YSGAFAPI_source.html)
 Input parameters | {::nomarkdown}YS{:/}
 Code | {::nomarkdown}  N YSBEG,YSEND,YSLIMIT<br> K YSDATA<br> D PARSE(.YS)<br> I DFN'>0 S YSDATA(1)="[ERROR]",YSDATA(2)="No dfn" Q<br> S YSDATA(1)="[DATA]"<br> S N=1<br> D HXLP{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}