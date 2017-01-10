---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET RESERVED TXNS 

 property | value 
--- | --- 
 label | DENTV TP GET RESERVED TXNS
 tag | GET
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | GLOBAL ARRAY
 description | Returns all reserved transactions for a particular Dental provider andpatient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PROV | LITERAL | 30 | true | Provider IEN from file 200. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Patient DFN from file 2. | 