---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MHV LOG DETAIL 

 property | value 
--- | --- 
 label | MHV LOG DETAIL
 tag | LOGDET
 routine | [MHVUL2](http://code.osehra.org/dox/Routine_MHVUL2_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieve an MHV application log entry.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DTM | LITERAL | 15 | true | Negative Date/Time of entry in Fileman format. | 
| vs:Input_Parameter-8994_02 | JOB | LITERAL | 15 | true | Job number of log entry. | 