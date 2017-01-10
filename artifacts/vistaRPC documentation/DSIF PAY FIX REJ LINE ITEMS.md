---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY FIX REJ LINE ITEMS 

 property | value 
--- | --- 
 label | DSIF PAY FIX REJ LINE ITEMS
 tag | REALL
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FBOLDB | LITERAL | 10 | true | Batch IEN of the batch that held the line items that were rejected. | 
| vs:Input_Parameter-8994_02 | FBNEWB | LITERAL | 10 | true | Batch IEN of the batch that will hold the re-initiated line items. | 