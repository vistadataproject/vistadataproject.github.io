---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET PAT INFO 

 property | value 
--- | --- 
 label | MAGV GET PAT INFO
 tag | GETPATI
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | ARRAY
 description | This RPC returns information for VA patients given an internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATREFIEN | LITERAL | 10 | true | This is the internal entry number of the patient reference on the IMAGING PATIENT REFERENCE File (#2005.6). | 