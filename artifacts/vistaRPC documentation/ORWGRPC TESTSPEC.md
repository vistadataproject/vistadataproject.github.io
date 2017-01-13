---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC TESTSPEC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC TESTSPEC{:/}
 tag | {::nomarkdown}TESTSPEC{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC - get test/spec info on all lab tests
 Lines | ```
 D TESTSPEC^ORWGAPI("ORWGRPC")
 S DATA=$NA(^TMP("ORWGRPC",$J))```




 Generated on January 13th 2017, 6:55:29 am