---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORB RENEW ALERT 

 property | value 
--- | --- 
 label | ORB RENEW ALERT
 tag | RENEW
 routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 return value type | SINGLE VALUE
 description | This rpc renews an alert.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| XQAID | LITERAL | 255 | true | XQAID is the unique identifier used by Kernel Alerts to process and take actions on alerts. | 