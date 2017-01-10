---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFC REMOTE AUDIT 

 property | value 
--- | --- 
 label | VAFC REMOTE AUDIT
 tag | AUDIT
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call will allow users to pull an audit reportfrom a remote site.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | VALUE | LITERAL | 16 | true | The VALUE can come in as 'I.ICN', 'S.SSN', 'D.DFN'or 'P.NAME' | 
| vs:Input_Parameter-8994_02 | SSN | LITERAL | 9 | true |  | 
| vs:Input_Parameter-8994_02 | SDT | LITERAL | 30 | true |  | 
| vs:Input_Parameter-8994_02 | EDT | LITERAL | 30 | true |  | 