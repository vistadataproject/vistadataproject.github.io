---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY FIX ALL REJ ITEMS 

 property | value 
--- | --- 
 label | DSIF PAY FIX ALL REJ ITEMS
 tag | ALLMEDR
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | GLOBAL ARRAY
 description | re-initiate all rejected line items in medical (B3) type batch

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | OLD BATCH | LITERAL | 35 | true | Old Batch IEN | 
| vs:Input_Parameter-8994_02 | NEW BATCH | LITERAL | 35 | true | New Batch IEN | 