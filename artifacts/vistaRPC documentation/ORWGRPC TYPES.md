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
 Lines | {::nomarkdown} D TYPES^ORWGAPI("ORWGRPC",DFN,+$G(SUB))<br/> S TYPES=$NA(^TMP("ORWGRPC",$J))<br/>{:/}




 Generated on January 13th 2017, 7:15:28 am