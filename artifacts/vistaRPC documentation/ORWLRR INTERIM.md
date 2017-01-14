---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWLRR INTERIM 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR INTERIM{:/}
 tag | {::nomarkdown}INTERIM{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | INTERIM^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Interim Report RPC (All Tests by Date)
 Input parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2{:/}
 Code | ```  N ROOT
 S ROOT=$$SET()
 I $$REMOTE(.DFN,.ROOT) D INTERIM^LR7OGM(.ORY,DFN,DATE1,DATE2)
 D CLEAN(.ORY,.ROOT)```




 Generated on January 14th 2017, 7:26:35 am