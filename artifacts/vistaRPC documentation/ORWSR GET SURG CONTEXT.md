---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR GET SURG CONTEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR GET SURG CONTEXT{:/}
 tag | {::nomarkdown}GTSURCTX{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns current Notes view context for user
 Input Parameters | {::nomarkdown}ORUSER{:/}
 Lines | ```
 N OCCLIM,SHOWSUB
 S Y=$$GET^XPAR("ALL","ORCH CONTEXT SURGERY",1)```




 Generated on January 13th 2017, 6:55:29 am