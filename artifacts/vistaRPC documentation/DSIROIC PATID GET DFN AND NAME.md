---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROIC PATID GET DFN AND NAME 

 property | value 
--- | --- 
 label | DSIROIC PATID GET DFN AND NAME
 tag | PATINFO
 routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
 return value type | SINGLE VALUE
 description | Get patient information form a request.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 30 | true | IEN of a request in 19620 fro which patient information is needed. | 