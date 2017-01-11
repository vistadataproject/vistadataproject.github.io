---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORB FORWARD ALERT 

 property | value 
--- | --- 
 label | ORB FORWARD ALERT
 tag | FWD
 routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 return value type | SINGLE VALUE
 description | The rpc forwards an alert.


### Method description

 property | value 
--- | --- 
 Method comment | forward a notification

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 255 | true | The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:\OR,<dfn>,<notif ien>;<notif date.time>\ | 
| RECIPIENT | LITERAL | 64 | true | DUZ (file 200 ien) of the person to receive the forwarded alert. | 
| TYPE | LITERAL | 16 | true | The type of message to be forwarded.  \A\ indicates an alert is to be forwarded. | 
| COMMENT | LITERAL | 255 |  | The comment (optional) to be forwarded with the alert. | 