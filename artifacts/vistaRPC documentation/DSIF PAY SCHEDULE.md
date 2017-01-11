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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CPT | LITERAL | 30 | true |  | 
| MODIFIERS | LITERAL | 35 | true | CPT modifiers (external value), comma deliminted | 
| DATE OF SERVICE | LITERAL | 7 | true | Entered in standard FM format:  CYYMMDD (time is not allowed here) C - Centuries since 1700 (2000's = 3) YY - two digit year MM - 2 digit month DD - Day Oct 15, 2001 = 3011015   | 
| ZIP | LITERAL | 9 | true |  | 
| VENDOR IEN | LITERAL | 35 | true |  | 
| TYPE OF SERVICE | LITERAL | 12 | true |  | 




Generated on January 11th 2017, 6:34:23 am