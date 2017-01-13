---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCS PRINT REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCS PRINT REPORT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWCSP](http://code.osehra.org/dox/Routine_ORWCSP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a consult report on the Consult tabin CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | print report entry point
 Input Parameters | {::nomarkdown}ORIO<br/>DFN<br/>ORID{:/}
 Lines | ```{::nomarkdown} IF '$$CHK() G PRINTQ<br/> N TASKDATA<br/> S TASKDATA("DESC")="Consult Report Print"<br/> S TASKDATA("RTN")="DEQUE^ORWCSP"<br/> D TASK(.ORY,.ORIO,.DFN,.ORID,.TASKDATA)```{:/}
 Leading comment lines | {::nomarkdown}RPC: ORWCS PRINT REPORT<br/>See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the consult.{:/} | 




 Generated on January 13th 2017, 7:11:26 am