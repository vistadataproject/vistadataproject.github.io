---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR RGET 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR RGET{:/}
 tag | {::nomarkdown}RGET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Orders of AutoDC/Release Event
 Input Parameters | {::nomarkdown}DFN<br/>FILTER<br/>GROUPS<br/>DTFROM<br/>DTTHRU<br/>EVENT{:/}
 Lines | ```
 N EVTDCREL
 S EVTDCREL="TRUE"
 D AGET(.REF,DFN,FILTER,GROUPS,DTFROM,DTTHRU,EVENT)```




 Generated on January 13th 2017, 6:55:29 am