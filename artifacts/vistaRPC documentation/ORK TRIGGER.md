---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORK TRIGGER 

 property | value 
--- | --- 
 label | ORK TRIGGER
 tag | EN
 routine | [ORKCHK](http://code.osehra.org/dox/Routine_ORKCHK_source.html)
 return value type | ARRAY
 description | This function returns a list of order check messages.  

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 16 | true | The record number from the Patient File [#2]. | 
| vs:Input_Parameter-8994_02 | ORDER INFO | LIST | 255 | true | Array of order information in the format: orderable item #|filler app|nat't id^nat'l text^nat'l coding system^local id^local text^local codingsystem|order effective date/time|order number. | 
| vs:Input_Parameter-8994_02 | ORDER MODE/EVENT | LITERAL | 16 | true | Indicates the mode or event which trigger the need for order checking.Set of codes including: DISPLAY, SELECT, ACCEPT, SESSION, NOTIF, ALL. | 