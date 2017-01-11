---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV LOCATION SELECT 

 property | value 
--- | --- 
 label | GMV LOCATION SELECT
 tag | RPC
 routine | [GMVRPCHL](http://code.osehra.org/dox/Routine_GMVRPCHL_source.html)
 return value type | GLOBAL ARRAY
 description | Select a hospital location by name, from a patient appointment or from apatient admission. Can also generate a list of active clinics. This remote procedure is documented in Integration Agreement 4461.


### Method description

 property | value 
--- | --- 
 Method comment | [Procedure] Main RPC call tag
 Leading comment lines | RPC: [GMV LOCATION SELECT],Input parameters,1. RESULTS [Reference/Required] RPC Return array,2. OPTION [Literal/Required] RPC Option to execute,3. DATA [Literal/Required] Other data as required for call

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 10 | true | Routine tag line in GMVRPCHL to call. | 
| DATA | LITERAL | 100 | true | Other data as required for the call. | 