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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XUPSLNAM | LITERAL | 25 | true | Required if lookup by name. | 
| XUPSFNAM | LITERAL | 15 | true |  | 
| XUPSSSN | LITERAL | 9 | true |  | 
| XUPSPROV | LITERAL | 1 | true |  | 
| XUPSSTN | LITERAL | 6 | true |  | 
| XUPSMNM | LITERAL | 3 | true |  | 
| XUPSDATE | LITERAL | 8 | true |  | 
| XUPSVPID | LITERAL |  | true | Required if lookup by VPID. | 




Generated on January 11th 2017, 6:34:23 am