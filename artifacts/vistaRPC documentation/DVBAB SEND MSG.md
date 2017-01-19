---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB SEND MSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB SEND MSG{:/}
 tag | {::nomarkdown}MSG{:/}
 routine | [DVBAB1](http://code.osehra.org/dox/Routine_DVBAB1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to generate e-mail messages for specific CAPRI actions, such aschanging a C&P exam request.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the cancelling users DUZ.{:/} | 
| {::nomarkdown}VAL2{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}45{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Subjecto of the message - XMSUB{:/} | 
| {::nomarkdown}VAL3{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the text of the message  -  XMTEXT{:/} | 
| {::nomarkdown}VAL4{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the mail group name  -  MGN{:/} | 
| {::nomarkdown}VAL5{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the 2507 request number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}