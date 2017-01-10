---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG FLD ATT 

 property | value 
--- | --- 
 label | MAG FLD ATT
 tag | DDLF
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | ARRAY
 description | This RPC returns a list of field attributes.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 32 | true | The file number that contains the desired attribute. | 
| vs:Input_Parameter-8994_02 | FIELD | LITERAL | 32 | true | The desired field attribute. | 
| vs:Input_Parameter-8994_02 | FLAG | LITERAL | 32 | true |  | 
| vs:Input_Parameter-8994_02 | ATTR | LITERAL | 32 | true | The field attribute desired. | 