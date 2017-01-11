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


### Method description

 property | value 
--- | --- 
 Method comment | GMV GET CATEGORY IEN [RPC entry point]
 Leading comment lines | Input,RESULT = variable name to hold result,GMVCAT = Name of Category (from FILE 120.53) (e.g., METHOD),Output: Returns the IEN if GMVTYPE exists in FILE 120.53,else returns -1

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMVCAT | LITERAL | 45 | true | GMVCAT = Name of Category (from FILE 120.53) (e.g., METHOD) | 




Generated on January 11th 2017, 6:34:23 am