---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB SEND MSG 

 property | value 
--- | --- 
 label | DVBAB SEND MSG
 tag | MSG
 routine | [DVBAB1](http://code.osehra.org/dox/Routine_DVBAB1_source.html)
 return value type | SINGLE VALUE
 description | Used to generate e-mail messages for specific CAPRI actions, such aschanging a C&P exam request.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VAL1 | LITERAL | 8 | true | This is the cancelling users DUZ. | 
| VAL2 | LITERAL | 45 | true | This is the Subjecto of the message - XMSUB | 
| VAL3 | LIST |  | true | This is the text of the message  -  XMTEXT | 
| VAL4 | LITERAL | 30 | true | This is the mail group name  -  MGN | 
| VAL5 | LITERAL | 15 | true | This is the 2507 request number | 




 ###### Generated on January 11th 2017, 6:39:42 am