---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REPORTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT LAB REPORTS{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a report on the Labs tabin CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | print report entry point
 Input Parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>RPTID<br/>ORDAYSBK<br/>ORTESTS<br/>ORALPHA<br/>OROMEGA{:/}
 Lines | {::nomarkdown} IF '$$CHK() G PRINTQ<br/> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="GUI Lab Report Print"<br/> S ZTRTN="DEQUE^ORWRPL"<br/> S ZTSAVE("ORDFN")="",ZTSAVE("RPTID")="",ZTSAVE("ORDAYSBK")="",ZTSAVE("DUZ(")="",ZTSAVE("ORTESTS(")="",ZTSAVE("ORALPHA")="",ZTSAVE("OROMEGA")=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."{:/}
 Leading comment lines | {::nomarkdown}See RPC definition for details on input and output parameters{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the desired report.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the report should search for information.{:/} | 




 Generated on January 13th 2017, 7:15:27 am