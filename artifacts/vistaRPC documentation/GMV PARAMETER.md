---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV PARAMETER 

 property | value 
--- | --- 
 label | GMV PARAMETER
 tag | RPC
 routine | [GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)
 return value type | GLOBAL ARRAY
 description | Sets and retrieves parameter values used by the graphical user interface. This remote procedure call is documented in Integration Agreement 4367.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | OPTION | LITERAL | 10 | true | Routine tag line to call. | 
| vs:Input_Parameter-8994_02 | ENT | LITERAL |  |  | The entity value to use. See Integration Agreement 2263 and FILE 8989.518for a list of entity values. | 
| vs:Input_Parameter-8994_02 | PAR | LITERAL |  |  | The parameter value to use. See FILE 8989.51 for a list of parametervalues. This value must start with the letters \GMV\ (no quotes). | 
| vs:Input_Parameter-8994_02 | INST | LITERAL |  |  | The instance to use.  | 
| vs:Input_Parameter-8994_02 | VAL | LITERAL |  |  | The value assigned to a parameter. Values are stored in FILE 8989.5. | 