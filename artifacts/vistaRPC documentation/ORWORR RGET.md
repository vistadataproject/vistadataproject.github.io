---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORR RGET 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR RGET{:/}
 tag | {::nomarkdown}RGET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RGET^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | Orders of AutoDC/Release Event
 Input parameters | {::nomarkdown}DFN<br/>FILTER<br/>GROUPS<br/>DTFROM<br/>DTTHRU<br/>EVENT{:/}
 Code | ```  N EVTDCREL
 S EVTDCREL="TRUE"
 D AGET(.REF,DFN,FILTER,GROUPS,DTFROM,DTTHRU,EVENT)```




 Generated on January 14th 2017, 7:26:35 am