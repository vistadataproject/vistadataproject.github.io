---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA GET A W KL AND AIS BY KL 

 property | value 
--- | --- 
 label | MAGVA GET A W KL AND AIS BY KL
 tag | GAKLAISK
 routine | [MAGVAG02](http://code.osehra.org/dox/Routine_MAGVAG02_source.html)
 return value type | ARRAY
 description |  Get artifact values with key list and artifact instance from ARTIFACT file (#2006.916) & ARTIFACT KEYLIST file (#2006.913) and ARTIFACT INSTANCE file (#2006.918) by artifact KEYLIST

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | KLIST | LIST |  | true |  KLIST(1) = First level Key KLIST(2) = Second level Key   ... KLIST(N) = N-th level Key Any level is optional | 