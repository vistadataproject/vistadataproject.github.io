---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB 8861 NOTIFICATIONS 

 property | value 
--- | --- 
 label | DVBAB 8861 NOTIFICATIONS
 tag | ENTER
 routine | [DVBANTFY](http://code.osehra.org/dox/Routine_DVBANTFY_source.html)
 return value type | SINGLE VALUE
 description | This will perform MailMan notifications for Form 8861 Requests based on the status of the request.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 5 | true | IEN of the request. | 
| STAT | LITERAL | 9 | true | Status of Form 8861 request. This determines what message is sent and to whom. | 




Generated on January 11th 2017, 6:34:23 am