---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE PAT REF 

 property | value 
--- | --- 
 label | MAGV INACTIVATE PAT REF
 tag | INPAT
 routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
 return value type | ARRAY
 description | This RPC inactivates an entry on the IMAGING PATIENT REFERENCE File (#2005.6)..

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIEN | LITERAL | 10 | true | This is the internal entry number of the record to be inactivated on the IMAGING PATIENT REFERENCE File (#2005.6). | 