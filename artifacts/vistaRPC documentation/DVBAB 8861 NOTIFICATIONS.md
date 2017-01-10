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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 5 | true | IEN of the request. | 
| vs:Input_Parameter-8994_02 | STAT | LITERAL | 9 | true | Status of Form 8861 request. This determines what message is sent and to whom. | 