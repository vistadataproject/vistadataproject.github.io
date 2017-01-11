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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OLD BATCH | LITERAL | 35 | true | Old Batch IEN | 
| NEW BATCH | LITERAL | 35 | true | New Batch IEN | 




Generated on January 11th 2017, 6:34:23 am