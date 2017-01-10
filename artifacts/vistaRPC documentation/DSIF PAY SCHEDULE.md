---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAY SCHEDULE 

 property | value 
--- | --- 
 label | DSIF PAY SCHEDULE
 tag | PAYSCH
 routine | [DSIFPAY1](http://code.osehra.org/dox/Routine_DSIFPAY1_source.html)
 return value type | SINGLE VALUE
 description | Get pay schedule amounts by CPT, Modifiers and Zip code

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CPT | LITERAL | 30 | true |  | 
| vs:Input_Parameter-8994_02 | MODIFIERS | LITERAL | 35 | true | CPT modifiers (external value), comma deliminted | 
| vs:Input_Parameter-8994_02 | DATE OF SERVICE | LITERAL | 7 | true | Entered in standard FM format:  CYYMMDD (time is not allowed here) C - Centuries since 1700 (2000's = 3) YY - two digit year MM - 2 digit month DD - Day Oct 15, 2001 = 3011015   | 
| vs:Input_Parameter-8994_02 | ZIP | LITERAL | 9 | true |  | 
| vs:Input_Parameter-8994_02 | VENDOR IEN | LITERAL | 35 | true |  | 
| vs:Input_Parameter-8994_02 | TYPE OF SERVICE | LITERAL | 12 | true |  | 