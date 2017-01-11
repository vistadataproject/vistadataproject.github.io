---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORB FOLLOW-UP ARRAY 

 property | value 
--- | --- 
 label | ORB FOLLOW-UP ARRAY
 tag | GUI
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | ARRAY
 description | This function returns an array of follow-up data.  Content of the datavaries by notification.


### Method description

 property | value 
--- | --- 
 Method comment | Notification follow-up for GUI called via API: ORB FOLLOW-UP
 Leading comment lines | called by ORB FOLLOW-UP api:

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 32 | true | The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  The OE/RR alerts the format is:\OR,<dfn>,<notif ien>;<notif date.time>\ | 




 ###### Generated on January 11th 2017, 6:39:42 am