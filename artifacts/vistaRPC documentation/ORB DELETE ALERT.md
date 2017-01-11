---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORB DELETE ALERT 

 property | value 
--- | --- 
 label | ORB DELETE ALERT
 tag | DEL
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | SINGLE VALUE
 description | This function deletes an alert.


### Method description

 property | value 
--- | --- 
 Method comment | delete an alert

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 32 | true | The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:\OR,<dfn>,<notif ien>;<notif date.time>\ | 