---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY DELETE PAYMENT 

 property | value 
--- | --- 
 label | DSIF PAY DELETE PAYMENT
 tag | DELPAY
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | SINGLE VALUE
 description | Allows deletion of payment data based on flags supplied, usually requires supervisor key.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PTID | LITERAL | 45 | true | FBID=IEN of Fee Basis Patient file:(1)^IEN of fee basis vendor:(2) ^IEN ofTreatment date:(3)^CPT code:(4)^Batch number:(5)provided:(5)^Batch number:(6) | 