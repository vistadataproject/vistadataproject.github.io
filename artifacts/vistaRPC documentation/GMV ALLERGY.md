---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV ALLERGY 

 property | value 
--- | --- 
 label | GMV ALLERGY
 tag | ALLERGY
 routine | [GMVUTL3](http://code.osehra.org/dox/Routine_GMVUTL3_source.html)
 return value type | ARRAY
 description | This remote procedure call retrieves the patient's allergy information. This remote procedure call is documented in Integration Agreement 4350.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | DFN is a pointer to the PATIENT file (#2). | 