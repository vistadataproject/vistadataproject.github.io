---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV GET VITAL TYPE IEN 

 property | value 
--- | --- 
 label | GMV GET VITAL TYPE IEN
 tag | TYPE
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | SINGLE VALUE
 description | Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file. This remote procedure call is documented in Integration Agreement 4357.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVTYPE | LITERAL | 55 | true | GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT) | 