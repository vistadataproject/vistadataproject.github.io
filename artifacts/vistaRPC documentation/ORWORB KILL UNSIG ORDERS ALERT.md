---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWORB KILL UNSIG ORDERS ALERT 

 property | value 
--- | --- 
 label | ORWORB KILL UNSIG ORDERS ALERT
 tag | KILUNSNO
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | SINGLE VALUE
 description | Check patient's unsigned orders, and kill unsigned orders alert for thisuser if no unsigned orders remain for his/her signature.


### Method description

 property | value 
--- | --- 
 Method comment | Delete unsigned order alerts if no unsigned orders remaining

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Patient DFN | LITERAL | 16 | true |  | 




 ###### Generated on January 11th 2017, 6:39:42 am