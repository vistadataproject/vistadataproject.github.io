---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP CHECK CANCEL 7078 

 property | value 
--- | --- 
 label | DSIF INP CHECK CANCEL 7078
 tag | CANCHK
 routine | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
 return value type | SINGLE VALUE
 description | This RPC does some basic checks on a 7078 to see if can be cancelled.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Pointer to file 162.4 VA FORM 10-7078 (Required) | 