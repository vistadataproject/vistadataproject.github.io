---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ1 DELSEN 

 property | value 
--- | --- 
 label | ORRHCQ1 DELSEN
 tag | DELSEN
 routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
 return value type | SINGLE VALUE
 description | Deletes the sensitive patient from the sensitive patient list generatedfor the currently executing query.  No further evaluation of the patients record will take place.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 80 | true | The DFN of the record to remove. | 