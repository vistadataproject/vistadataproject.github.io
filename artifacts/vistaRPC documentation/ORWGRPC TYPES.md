---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC TYPES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC TYPES{:/}
 tag | {::nomarkdown}TYPES{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TYPES^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get all the types of data on a patient (SUB=1, gets subtypes, DFN=0 gets all types), 
 Input parameters | {::nomarkdown}DFN<br>SUB{:/}
 Code | {::nomarkdown}  D TYPES^ORWGAPI("ORWGRPC",DFN,+$G(SUB))<br> S TYPES=$NA(^TMP("ORWGRPC",$J))<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}