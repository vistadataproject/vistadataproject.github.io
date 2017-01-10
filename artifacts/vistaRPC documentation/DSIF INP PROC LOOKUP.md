---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP PROC LOOKUP 

 property | value 
--- | --- 
 label | DSIF INP PROC LOOKUP
 tag | LOOKUP
 routine | [DSIFINP1](http://code.osehra.org/dox/Routine_DSIFINP1_source.html)
 return value type | GLOBAL ARRAY
 description | Pass in text for a lookup of Procedure codes (File #80.1)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TEXT | LITERAL | 55 | true |  | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL | 3 | true | Enter number of values to return for the lookup. | 