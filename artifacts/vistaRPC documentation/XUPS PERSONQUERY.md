---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XUPS PERSONQUERY 

 property | value 
--- | --- 
 label | XUPS PERSONQUERY
 tag | EN1
 routine | [XUPSQRY](http://code.osehra.org/dox/Routine_XUPSQRY_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | XUPSLNAM | LITERAL | 25 | true | Required if lookup by name. | 
| vs:Input_Parameter-8994_02 | XUPSFNAM | LITERAL | 15 | true |  | 
| vs:Input_Parameter-8994_02 | XUPSSSN | LITERAL | 9 | true |  | 
| vs:Input_Parameter-8994_02 | XUPSPROV | LITERAL | 1 | true |  | 
| vs:Input_Parameter-8994_02 | XUPSSTN | LITERAL | 6 | true |  | 
| vs:Input_Parameter-8994_02 | XUPSMNM | LITERAL | 3 | true |  | 
| vs:Input_Parameter-8994_02 | XUPSDATE | LITERAL | 8 | true |  | 
| vs:Input_Parameter-8994_02 | XUPSVPID | LITERAL |  | true | Required if lookup by VPID. | 