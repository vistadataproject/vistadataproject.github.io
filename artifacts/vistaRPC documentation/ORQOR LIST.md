---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQOR LIST 

 property | value 
--- | --- 
 label | ORQOR LIST
 tag | LIST
 routine | [ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
 return value type | ARRAY
 description | Returns a list of patient orders.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL | 16 | true | Patient DFN from Patient file [#2]. | 
| vs:Input_Parameter-8994_02 | GROUP | LITERAL | 16 | true | Entry number of the desired display group from the Display Group File [#100.98]. | 
| vs:Input_Parameter-8994_02 | FLAG | LITERAL | 16 | true | Flag identifying the context of the orders to be retreived. | 
| vs:Input_Parameter-8994_02 | STARTDATE | LITERAL | 16 | true | The startdate for the order search in 'T' or Fileman format.Startdate is only considered when FLAG is '1' (return all orders). | 
| vs:Input_Parameter-8994_02 | STOPDATE | LITERAL | 16 | true | The stopdate for the order search in 'T' or Fileman format.Stopdate is only considered when FLAG is '1' (return all orders). | 