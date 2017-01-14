---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWLRR MICRO 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR MICRO{:/}
 tag | {::nomarkdown}MICRO{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | MICRO^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Micro Report RPC
 Input parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2{:/}
 Code | ```  N ROOT
 S ROOT=$$SET()
 I $$REMOTE(.DFN,.ROOT) D MICRO^LR7OGM(.ORY,DFN,DATE1,DATE2)
 D CLEAN(.ORY,.ROOT)```




 Generated on January 14th 2017, 7:26:35 am