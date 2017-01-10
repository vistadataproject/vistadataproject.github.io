---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET PAT REF ATTS 

 property | value 
--- | --- 
 label | MAGV GET PAT REF ATTS
 tag | GETPATA
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | ARRAY
 description | Returns patient attributes given the IEN on the IMAGING PATIENT REFERENCE File (#2005.6).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIEN | LITERAL | 128 | true | The internal entry number of the patient on the IMAGING PATIENT REFERENCE File (#2005.6). | 