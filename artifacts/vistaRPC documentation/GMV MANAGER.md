---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV MANAGER 

 property | value 
--- | --- 
 label | GMV MANAGER
 tag | RPC
 routine | [GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html)
 return value type | GLOBAL ARRAY
 description | Performs many functions for the Manager module. This remote procedure call is documented in Integration Agreement 4360.


### Method description

 property | value 
--- | --- 
 Method comment | [Procedure] Main RPC call tag
 Leading comment lines | RPC: [GMV MANAGER],Input parameters,1. RESULTS [Reference/Required] RPC Return array,2. OPTION [Literal/Required] RPC Option to execute,3. DATA [Literal/Required] Other data as required for call

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 10 | true | Routine tag line in GMVRPCM to call. | 
| DATA | LITERAL | 100 | true | Other data as required for the call. | 




Generated on January 11th 2017, 6:34:23 am