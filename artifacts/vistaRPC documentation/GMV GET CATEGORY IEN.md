---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV GET CATEGORY IEN 

 property | value 
--- | --- 
 label | GMV GET CATEGORY IEN
 tag | CATEGORY
 routine | [GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
 return value type | SINGLE VALUE
 description | Returns the IEN if the value is found in the GMRV VITAL CATEGORY (#120.53)file. This remote procedure call is documented in Integration Agreement 4354.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVCAT | LITERAL | 45 | true | GMVCAT = Name of Category (from FILE 120.53) (e.g., METHOD) | 