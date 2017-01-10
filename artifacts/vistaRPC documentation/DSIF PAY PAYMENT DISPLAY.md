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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 35 | true | Patient IEN (File 161) | 
| vs:Input_Parameter-8994_02 | VENDOR | LITERAL | 35 | true | Vendor IEN (File 162) | 
| vs:Input_Parameter-8994_02 | DATE OF SERVICE | LITERAL | 7 | true | Fileman date of service | 
| vs:Input_Parameter-8994_02 | CPT | LITERAL | 10 | true | CPT code, (service provided) | 