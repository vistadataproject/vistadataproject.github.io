---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV USER 

 property | value 
--- | --- 
 label | GMV USER
 tag | RPC
 routine | [GMVRPCU](http://code.osehra.org/dox/Routine_GMVRPCU_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves data about the user (e.g., parameter settings). This remote procedure call is documented in Integration Agreement 4366.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 10 | true | Routine tag line to call in GMVRPCU. | 
| DATA | LITERAL | 100 | true | Other data as required for the call. | 