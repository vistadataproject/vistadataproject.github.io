---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB FORWARD ALERT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORB FORWARD ALERT{:/}
 tag | {::nomarkdown}FWD{:/}
 routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}The rpc forwards an alert.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | forward a notification

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 
| {::nomarkdown}RECIPIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ (file 200 ien) of the person to receive the forwarded alert.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The type of message to be forwarded.  \A\ indicates an alert is to be forwarded.{:/} | 
| {::nomarkdown}COMMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} |  | {::nomarkdown}The comment (optional) to be forwarded with the alert.{:/} | 




 Generated on January 13th 2017, 6:44:47 am