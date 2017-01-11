---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY PAYMENT DISPLAY 

 property | value 
--- | --- 
 label | DSIF PAY PAYMENT DISPLAY
 tag | DISPAY
 routine | [DSIFPAY1](http://code.osehra.org/dox/Routine_DSIFPAY1_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 35 | true | Patient IEN (File 161) | 
| VENDOR | LITERAL | 35 | true | Vendor IEN (File 162) | 
| DATE OF SERVICE | LITERAL | 7 | true | Fileman date of service | 
| CPT | LITERAL | 10 | true | CPT code, (service provided) | 




 Generated on January 11th 2017, 7:15:04 am