---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA FIND KEYLIST 

 property | value 
--- | --- 
 label | MAGVA FIND KEYLIST
 tag | FINDKEYS
 routine | [MAGVAKL1](http://code.osehra.org/dox/Routine_MAGVAKL1_source.html)
 return value type | ARRAY
 description | Return a list with all KEYS IENS that meet the keys provided

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| KLIST | LIST |  | true | KLIST(1) = First Key KLIST(2) = Second Key ... KLIST(N) = N-th Key | 