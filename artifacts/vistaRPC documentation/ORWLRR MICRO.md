---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLRR MICRO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR MICRO{:/}
 tag | {::nomarkdown}MICRO{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Micro Report RPC
 Input Parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2{:/}
 Lines | ```{::nomarkdown} N ROOT<br/> S ROOT=$$SET()<br/> I $$REMOTE(.DFN,.ROOT) D MICRO^LR7OGM(.ORY,DFN,DATE1,DATE2)<br/> D CLEAN(.ORY,.ROOT)```{:/}




 Generated on January 13th 2017, 7:11:26 am