---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB FOLLOW-UP TYPE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORB FOLLOW-UP TYPE{:/}
 tag | {::nomarkdown}TYPE{:/}
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the follow-up action type for a notification as identified via thealert xqaid.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return notif follow-up action type
 Input Parameters | {::nomarkdown}ORXQAID{:/}
 Lines | ```
 N NIEN
 S NIEN=$P($P(ORXQAID,";"),",",3)
 S ORBY=$G(^ORD(100.9,NIEN,3))
 I ORBY="" S ORBY="INFO^"
 E  S ORBY=$P(ORBY,U,2)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  For OE/RR alerts the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 




 Generated on January 13th 2017, 6:55:28 am