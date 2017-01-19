---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM GEC DIALOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM GEC DIALOG{:/}
 tag | {::nomarkdown}GEC{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will evaluate the Reminder Dialogs as the Finish button is clickfor the GEC Project. THis RPC will return an error messages if the fourGEC Reminder Dialogs are done out of order.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Reminder Definition IEN or the Reminder Dialog IEN{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 
| {::nomarkdown}Visit{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Visit Encounter String{:/} | 
| {::nomarkdown}NOTEIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}NOTEIEN is the progress Note IEN in file 8925.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GEC^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Input parameters | {::nomarkdown}IEN<br>DFN<br>VISIT<br>NOTEIEN{:/}
 Code | {::nomarkdown}  D API^PXRMGECU(.ORRESULT,IEN,DFN,VISIT,1,NOTEIEN){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}