---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE KEYLIST 

 property | value 
--- | --- 
 label | MAGVA CREATE KEYLIST
 tag | ADDKL
 routine | [MAGVAKL1](http://code.osehra.org/dox/Routine_MAGVAKL1_source.html)
 return value type | SINGLE VALUE
 description | Add new key pairs to ARTIFACT KEYLIST file (#2006.913) 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | KLIST | LIST |  | true | KLIST(1) = First Key  KLIST(2) = Second Key ... KLIST(N) = N-th Key | 