---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA GET A W KL AND AIS BY KL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA GET A W KL AND AIS BY KL{:/}
 tag | {::nomarkdown}GAKLAISK{:/}
 routine | [MAGVAG02](http://code.osehra.org/dox/Routine_MAGVAG02_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Get artifact values with key list and artifact instance from ARTIFACT file (#2006.916) & ARTIFACT KEYLIST file (#2006.913) and ARTIFACT INSTANCE file (#2006.918) by artifact KEYLIST{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}KLIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} KLIST(1) = First level Key KLIST(2) = Second level Key   ... KLIST(N) = N-th level Key Any level is optional{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}