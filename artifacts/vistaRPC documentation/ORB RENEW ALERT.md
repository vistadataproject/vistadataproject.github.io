---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB RENEW ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORB RENEW ALERT{:/}
 tag | {::nomarkdown}RENEW{:/}
 routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc renews an alert.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | renew/restore an alert/notification
 Input Parameters | {::nomarkdown}XQAID{:/}
 Lines | ```
 Q:$L($G(XQAID))<1
 K XQAKILL
 I '$D(^XTV(8992,"AXQA",XQAID,DUZ)) D RESTORE^XQALERT1 ;DBIA #4100
 S ORY=1```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}XQAID is the unique identifier used by Kernel Alerts to process and take actions on alerts.{:/} | 




 Generated on January 13th 2017, 6:55:29 am