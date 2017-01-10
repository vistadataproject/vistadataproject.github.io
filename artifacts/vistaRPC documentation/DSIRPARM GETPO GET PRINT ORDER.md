---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM GETPO GET PRINT ORDER 

 property | value 
--- | --- 
 label | DSIRPARM GETPO GET PRINT ORDER
 tag | GETPO
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | SINGLE VALUE
 description | This RPC will return the document Print Order for the specified ROI type and facility.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PRTORD | LITERAL | 30 | true | Print Order Name or IEN to DSIR ROI PRINT ORDER file 19620.702. | 
| vs:Input_Parameter-8994_02 | INST | LITERAL | 99 | true | Facility IEN to file 19620.701 - Optional if PRTORD is IEN, Required if PRTORD is Free Text. | 