---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV MANAGER 

 property | value 
--- | --- 
 label | GMV MANAGER
 tag | RPC
 routine | [GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html)
 return value type | GLOBAL ARRAY
 description | Performs many functions for the Manager module. This remote procedure call is documented in Integration Agreement 4360.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | OPTION | LITERAL | 10 | true | Routine tag line in GMVRPCM to call. | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 100 | true | Other data as required for the call. | 