---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REPORTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT LAB REPORTS{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a report on the Labs tabin CPRS.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the desired report.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the report should search for information.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PRINT^[ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 Method comment | print report entry point
 First comment | {::nomarkdown}See RPC definition for details on input and output parameters{:/}
 Input parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>RPTID<br/>ORDAYSBK<br/>ORTESTS<br/>ORALPHA<br/>OROMEGA{:/}
 Code | ```  IF '$$CHK() G PRINTQ
 N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE
 S ZTIO=ORIO,ZTDTH=$H
 S ZTDESC="GUI Lab Report Print"
 S ZTRTN="DEQUE^ORWRPL"
 S ZTSAVE("ORDFN")="",ZTSAVE("RPTID")="",ZTSAVE("ORDAYSBK")="",ZTSAVE("DUZ(")="",ZTSAVE("ORTESTS(")="",ZTSAVE("ORALPHA")="",ZTSAVE("OROMEGA")=""
 D ^%ZTLOAD
 I $D(ZTSK) D
 . S ORY="0^Report queued. (Task #"_ZTSK_")"
 E  D
 . S ORY="99^Task Rejected."```




 Generated on January 14th 2017, 7:26:35 am