---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB DELETE ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORB DELETE ALERT{:/}
 tag | {::nomarkdown}DEL{:/}
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This function deletes an alert.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | delete an alert
 Input Parameters | {::nomarkdown}XQAID<br/>ORKILL{:/}
 Lines | ```
 N ORN
 S ORN=$P($P(XQAID,";"),",",3)
 I $G(ORKILL)=1!($G(ORKILL)=0) S XQAKILL=ORKILL
 I $G(XQAKILL)="" S XQAKILL=$$XQAKILL^ORB3F1(ORN)
 I $G(XQAKILL)="" S XQAKILL=1
 S ORBY="FALSE"
 I $L($G(XQAID)) D DELETE^XQALERT S ORBY="TRUE"
 K XQAKILL```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 




 Generated on January 13th 2017, 6:55:28 am