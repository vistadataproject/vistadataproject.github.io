---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB TEXT FOLLOWUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB TEXT FOLLOWUP{:/}
 tag | {::nomarkdown}TXTFUP{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns text for notifications/alerts with a simple text message follow-upaction.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}NOTIFICATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of notification in the OE/RR Notification file[^OR(100.9].{:/} | 
| {::nomarkdown}XQADATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional data used in some follow-up actions.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TXTFUP^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | Follow-up for text messages
 Input parameters | {::nomarkdown}DFN, NOTIF, XQADATA{:/}
 Code | {::nomarkdown}  I NOTIF=67 D CHGRAD{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}