---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB FOLLOW-UP STRING 

 property | value 
--- | --- 
 label | {::nomarkdown}ORB FOLLOW-UP STRING{:/}
 tag | {::nomarkdown}GUI{:/}
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This function returns a string of follow-up data.  Content of the data varies by notification.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Notification follow-up for GUI called via API: ORB FOLLOW-UP
 Input Parameters | {::nomarkdown}ORXQAID{:/}
 Lines | ```{::nomarkdown} S ORENVIR="GUI"<br/> D PROCESS```{:/}
 Leading comment lines | {::nomarkdown}called by ORB FOLLOW-UP api:{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  For OE/RR alerts the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 




 Generated on January 13th 2017, 7:11:26 am