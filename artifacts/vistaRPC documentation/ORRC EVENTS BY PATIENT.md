---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC EVENTS BY PATIENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC EVENTS BY PATIENT{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORRCEVT](http://code.osehra.org/dox/Routine_ORRCEVT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns a list of the patient's alerted events.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient in the Patient file #2.{:/} | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the user in the New Person file #200.{:/} | 
| {::nomarkdown}DETAILS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This flag indicates whether to return the details or note text with eachevent (true) or just the list of event ID's (false).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}