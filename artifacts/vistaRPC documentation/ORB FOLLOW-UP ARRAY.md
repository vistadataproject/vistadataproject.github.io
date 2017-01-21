---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB FOLLOW-UP ARRAY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORB FOLLOW-UP ARRAY{:/}
 tag | {::nomarkdown}GUI{:/}
 routine | [ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function returns an array of follow-up data.  Content of the datavaries by notification.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The identifier used by the Kernel Alert utility to uniquely identify analert/notification.  The OE/RR alerts the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GUI^[ORB3FUP1](http://code.osehra.org/dox/Routine_ORB3FUP1_source.html)
 Method comment | Notification follow-up for GUI called via API: ORB FOLLOW-UP
 Input parameters | {::nomarkdown}ORXQAID{:/}
 First comment | {::nomarkdown}<pre> called by ORB FOLLOW-UP api:</pre>{:/}
 Code | {::nomarkdown}  S ORENVIR="GUI"<br> D PROCESS{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}