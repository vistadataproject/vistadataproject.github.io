---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET PAYMENT HISTORY 

 property | value 
--- | --- 
 label | DSIR GET PAYMENT HISTORY
 tag | GETHIST
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | ARRAY
 description | This RPC is used to return the payment history records for an ROI bill.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BILN | LITERAL | 999 | true | Internal Entry Number to file 19620.2 | 