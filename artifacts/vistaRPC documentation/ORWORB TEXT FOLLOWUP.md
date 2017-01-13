---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB TEXT FOLLOWUP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB TEXT FOLLOWUP{:/}
 tag | {::nomarkdown}TXTFUP{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns text for notifications/alerts with a simple text message follow-upaction.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Follow-up for text messages

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of patient in the Patient file [^DPT].{:/} | 
| {::nomarkdown}NOTIFICATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of notification in the OE/RR Notification file[^OR(100.9].{:/} | 
| {::nomarkdown}XQADATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional data used in some follow-up actions.{:/} | 




 Generated on January 13th 2017, 6:44:47 am