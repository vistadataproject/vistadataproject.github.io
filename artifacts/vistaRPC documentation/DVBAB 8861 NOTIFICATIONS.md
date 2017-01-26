---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB 8861 NOTIFICATIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB 8861 NOTIFICATIONS{:/}
 tag | {::nomarkdown}ENTER{:/}
 routine | [DVBANTFY](http://code.osehra.org/dox/Routine_DVBANTFY_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will perform MailMan notifications for Form 8861 Requests based on the status of the request.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the request.{:/} | 
| {::nomarkdown}STAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Status of Form 8861 request. This determines what message is sent and to whom.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}