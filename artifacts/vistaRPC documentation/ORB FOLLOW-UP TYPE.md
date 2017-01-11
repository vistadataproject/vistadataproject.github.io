---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORB FOLLOW-UP TYPE 

 property | value 
--- | --- 
 label | ORB FOLLOW-UP TYPE
 tag | TYPE
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | SINGLE VALUE
 description | Returns the follow-up action type for a notification as identified via thealert xqaid.


### Method description

 property | value 
--- | --- 
 Method comment | return notif follow-up action type

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 32 | true | The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  For OE/RR alerts the format is:\OR,<dfn>,<notif ien>;<notif date.time>\ | 




Generated on January 11th 2017, 6:34:23 am