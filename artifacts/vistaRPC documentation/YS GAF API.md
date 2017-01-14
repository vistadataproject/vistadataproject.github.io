---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; YS GAF API 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}YS GAF API{:/}
 tag | {::nomarkdown}GAFHX{:/}
 routine | [YSGAFAPI](http://code.osehra.org/dox/Routine_YSGAFAPI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GAFHX^[YSGAFAPI](http://code.osehra.org/dox/Routine_YSGAFAPI_source.html)
 Input parameters | {::nomarkdown}YS{:/}
 Code | ```  N YSBEG,YSEND,YSLIMIT
 K YSDATA
 D PARSE(.YS)
 I DFN'>0 S YSDATA(1)="[ERROR]",YSDATA(2)="No dfn" Q
 S YSDATA(1)="[DATA]"
 S N=1
 D HXLP```




 Generated on January 14th 2017, 7:26:35 am