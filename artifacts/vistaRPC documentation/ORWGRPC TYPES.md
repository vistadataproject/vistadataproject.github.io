---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC TYPES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC TYPES{:/}
 tag | {::nomarkdown}TYPES{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get all the types of data on a patient (SUB=1, gets subtypes, DFN=0 gets all types), 
 Input Parameters | {::nomarkdown}DFN<br/>SUB{:/}
 Lines | ```
 D TYPES^ORWGAPI("ORWGRPC",DFN,+$G(SUB))
 S TYPES=$NA(^TMP("ORWGRPC",$J))
```




 Generated on January 13th 2017, 6:55:29 am