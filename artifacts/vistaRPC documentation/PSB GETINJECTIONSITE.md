---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB GETINJECTIONSITE 

 property | value 
--- | --- 
 label | PSB GETINJECTIONSITE
 tag | RPC
 routine | [PSBINJEC](http://code.osehra.org/dox/Routine_PSBINJEC_source.html)
 return value type | ARRAY
 description | Get the last nn injections site info from the BCMA MEDICATION LOG file #53.9.   Get only of specific Orderable Items per patient in reversechronology date/time order or All Orderable Items per patient in reverse chronology date/time order.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Patient IEN number. | 
| vs:Input_Parameter-8994_02 | TIME | LITERAL |  | true | A time range, in hours, to search backwards through the BCMA MEDICATION LOG file #53.79 for injection site data.  | 
| vs:Input_Parameter-8994_02 | MAX | LITERAL |  | true | The maximum number of injection site items to return within the Time Range specified. | 
| vs:Input_Parameter-8994_02 | PSBOI | LITERAL |  | true | Orderable Item IEN. | 