---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB PARAMETER 

 property | value 
--- | --- 
 label | PSB PARAMETER
 tag | RPC
 routine | [PSBPAR](http://code.osehra.org/dox/Routine_PSBPAR_source.html)
 return value type | ARRAY
 description | Called by client to return or set parameters

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBCMD | LITERAL | 6 | true | Contains the command to perform against the system parameters.GETPAR: Get a single instance of a parameterGETLST: Get all instances of a multiple valued parameterSETPAR: Set a single instance of a parameterCLRLST: Clear all instances of parameters in a list | 
| PSBENT | LITERAL | 30 | true | Contains the entity to act upon.  Usually \###;DIC(4,\ for division. | 
| PSBPAR | LITERAL | 30 | true | The parameter as defined in file 8989.51. | 
| PSBINS | LITERAL | 30 | true | The instance of the parameter that you want to return.  Defaults to 1. | 
| PSBVAL | LITERAL | 80 | true | If setting a parameter this contains the data value to place in the parameter. | 