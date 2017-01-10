---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY FIX SEL REJECT ITEMS 

 property | value 
--- | --- 
 label | DSIF PAY FIX SEL REJECT ITEMS
 tag | REINIT
 routine | [DSIFPAY6](http://code.osehra.org/dox/Routine_DSIFPAY6_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT IEN | LITERAL | 35 | true | Patient IEN | 
| vs:Input_Parameter-8994_02 | OLD BATCH | LITERAL | 35 | true | Old rejected batch number (IEN) | 
| vs:Input_Parameter-8994_02 | NEW BATCH | LITERAL | 35 | true | New Batch IEN | 
| vs:Input_Parameter-8994_02 | LINES | LIST | 50 | true | Lines to re-initiate, format: passed in by a list/array  ;     B3 BATCHES: FBLINES(NUM) = PMT ID (N;N;N;N)                   FBLINES(NUM+n) = PMT ID#2, (ETC) ;     B9 BATCHES: FBLINES(NUM) = Invoice #1                   FBLINES(NUM+n) = INVOICE #2,  (ECT) Value of NUM must start with \1\! | 