---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLRR INTERIM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR INTERIM{:/}
 tag | {::nomarkdown}INTERIM{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Interim Report RPC (All Tests by Date)
 Input Parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2{:/}
 Lines | ```
 N ROOT
 S ROOT=$$SET()
 I $$REMOTE(.DFN,.ROOT) D INTERIM^LR7OGM(.ORY,DFN,DATE1,DATE2)
 D CLEAN(.ORY,.ROOT)```




 Generated on January 13th 2017, 6:55:28 am