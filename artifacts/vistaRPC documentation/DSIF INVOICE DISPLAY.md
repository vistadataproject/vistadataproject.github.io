---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INVOICE DISPLAY 

 property | value 
--- | --- 
 label | DSIF INVOICE DISPLAY
 tag | INVDISP
 routine | [DSIFINP4](http://code.osehra.org/dox/Routine_DSIFINP4_source.html)
 return value type | GLOBAL ARRAY
 description | Enter Batch or Invoice number

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BATCH | LITERAL | 20 | true | Batch IEN | 
| vs:Input_Parameter-8994_02 | INVOICE | LITERAL | 20 | true |  | 