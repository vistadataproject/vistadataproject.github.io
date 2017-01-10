---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET LAST STATUS 

 property | value 
--- | --- 
 label | DENTV TP GET LAST STATUS
 tag | LST
 routine | [DENTVTP5](http://code.osehra.org/dox/Routine_DENTVTP5_source.html)
 return value type | SINGLE VALUE
 description | Sends back the status of the last, non-deleted, encounter.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Contains the patient dfn (ien). | 