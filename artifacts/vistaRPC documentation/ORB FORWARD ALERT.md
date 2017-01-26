---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORB FORWARD ALERT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORB FORWARD ALERT{:/}
 tag | {::nomarkdown}FWD{:/}
 routine | [ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}The rpc forwards an alert.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XQAID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The alert identifier used by the Kernel Alert utility to uniquely identifyan alert/notification.  For OE/RR alerts, the format is:\OR,<dfn>,<notif ien>;<notif date.time>\{:/} | 
| {::nomarkdown}RECIPIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ (file 200 ien) of the person to receive the forwarded alert.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The type of message to be forwarded.  \A\ indicates an alert is to be forwarded.{:/} | 
| {::nomarkdown}COMMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} |  | {::nomarkdown}The comment (optional) to be forwarded with the alert.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FWD^[ORB31](http://code.osehra.org/dox/Routine_ORB31_source.html)
 Method comment | forward a notification
 Input parameters | {::nomarkdown}ORBLST, ORBRECIP, ORBTYPE, ORBCOMNT{:/}
 Code | {::nomarkdown}  I ORBLST="" S ORY=0 Q<br> S ORBLST(1)=ORBLST<br> D FORWARD^XQALFWD(.ORBLST,.ORBRECIP,ORBTYPE,ORBCOMNT)<br> S ORY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}