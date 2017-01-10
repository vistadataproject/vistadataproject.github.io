---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LINK TO FLAG 

 property | value 
--- | --- 
 label | TIU LINK TO FLAG
 tag | LINK
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to link a Progress Note to a Patient Record Flag

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUIEN | LITERAL |  | true | TIU DOCUMENT IEN (8925) | 
| vs:Input_Parameter-8994_02 | PRFIEN | LITERAL |  | true | Flag IEN (26.11 or 26.15) | 
| vs:Input_Parameter-8994_02 | ACTIENT | LITERAL |  | true | PRF Assignment History IEN (26.14) | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | Patient IEN (File 2) | 