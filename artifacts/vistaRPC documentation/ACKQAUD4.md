---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ACKQAUD4 

 property | value 
--- | --- 
 label | ACKQAUD4
 tag | DFNCT
 routine | [ACKQAG05](http://code.osehra.org/dox/Routine_ACKQAG05_source.html)
 return value type | ARRAY
 description | Returns an array with ARR(0)=# of audiograms for DFN ^ DFN nameEach numbered line after 0 has the IEN of the entry:arr(ct)=IEN

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Pointer to the PATIENT file (#2). | 