---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA GET A W KL AND AIS BY PK 

 property | value 
--- | --- 
 label | MAGVA GET A W KL AND AIS BY PK
 tag | GAKLAISP
 routine | [MAGVAG02](http://code.osehra.org/dox/Routine_MAGVAG02_source.html)
 return value type | ARRAY
 description |  Get artifact values with key list and artifact instance from ARTIFACT file (#2006.916) & ARTIFACT KEYLIST file (#2006.913) and ARTIFACT INSTANCE file (#2006.918) by artifact PK (IEN)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | Artifact PK | 