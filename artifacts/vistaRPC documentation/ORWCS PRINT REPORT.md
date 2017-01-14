---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCS PRINT REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCS PRINT REPORT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWCSP](http://code.osehra.org/dox/Routine_ORWCSP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a consult report on the Consult tabin CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the consult.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PRINT^[ORWCSP](http://code.osehra.org/dox/Routine_ORWCSP_source.html)
 Method comment | print report entry point
 First comment | {::nomarkdown}RPC: ORWCS PRINT REPORT<br/>See RPC definition for details on input and output parameters{:/}
 Input parameters | {::nomarkdown}ORIO<br>DFN<br>ORID{:/}
 Code | {::nomarkdown}  IF '$$CHK() G PRINTQ<br> N TASKDATA<br> S TASKDATA("DESC")="Consult Report Print"<br> S TASKDATA("RTN")="DEQUE^ORWCSP"<br> D TASK(.ORY,.ORIO,.DFN,.ORID,.TASKDATA){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}