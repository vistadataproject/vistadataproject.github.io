---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU MED GET OBJECT 

 property | value 
--- | --- 
 label | TIU MED GET OBJECT
 tag | GETOBJ
 routine | [TIUMED1](http://code.osehra.org/dox/Routine_TIUMED1_source.html)
 return value type | GLOBAL ARRAY
 description | Returns the data from a TIU Object.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUDFN | LITERAL |  | true | Patient IEN. | 
| vs:Input_Parameter-8994_02 | TIUOBJ | LITERAL |  | true | Name of the TIU Object. | 