---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRA PRINT REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRA PRINT REPORT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWRAP](http://code.osehra.org/dox/Routine_ORWRAP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print an imaging report on the Imaging tabin CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}EXAM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the imaging exam.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRINT^[ORWRAP](http://code.osehra.org/dox/Routine_ORWRAP_source.html)
 Method comment | print report entry point
 Input parameters | {::nomarkdown}ORIO, DFN, ORID{:/}
 First comment | {::nomarkdown}<pre>  RPC: ORWRA PRINT REPORT<br/>  See RPC definition for details on input and output parameters<br/></pre>{:/}
 Code | {::nomarkdown}  IF '$$CHK^ORWCSP() G PRINTQ<br> N TASKDATA<br> S TASKDATA("DESC")="Imaging Report Print"<br> S TASKDATA("RTN")="DEQUE^ORWRAP"<br> D TASK^ORWCSP(.ORY,.ORIO,.DFN,.ORID,.TASKDATA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}