---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY ALL PAYMENTS DISPLAY 

 property | value 
--- | --- 
 label | DSIF PAY ALL PAYMENTS DISPLAY
 tag | EN1
 routine | [DSIFPAY2](http://code.osehra.org/dox/Routine_DSIFPAY2_source.html)
 return value type | ARRAY
 description | Input DFN and Vendor IEN, to get a list of existing payments.Optional parameters are Date of service (FM date) and CPT IEN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true |  | 
| VENDOR IEN | LITERAL | 25 | true |  | 
| DATE OF SERVICE | LITERAL | 7 | true | Date of service FM format (optional) **Unless you enter a CPT code, then it is required! | 
| CPT | LITERAL | 12 | true | CPT code, external value. | 