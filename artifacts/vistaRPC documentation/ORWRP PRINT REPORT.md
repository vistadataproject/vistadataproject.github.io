---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT REPORT{:/}
 tag | {::nomarkdown}PRINT{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc is used to print a report on the Report tabin CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the desired report.{:/} | 
| {::nomarkdown}HEALTH SUMMARY TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the HEALTH SUMMARY TYPEfile.This parameter is only required for Health Summary reports.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.{:/} | 
| {::nomarkdown}EXAM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Identification number of the exam.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PRINT^[ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 Method comment | print report entry point
 Input parameters | {::nomarkdown}ORIO, ORDFN, ORRPTID, ORHSTYPE, ORDTRNG, OREXAMID, ORCOMP, ORALPHA, OROMEGA{:/}
 First comment | {::nomarkdown}<pre>  RPC: ORWRP PRINT REPORT<br/>  See RPC definition for details on input and output parameters</pre>{:/}
 Code | {::nomarkdown}  N ORHSTAG<br> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br> IF '$$CHK() G PRINTQ<br> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ZTIO<br> S ZTIO=ORIO,ZTDTH=$H<br> S ZTDESC="Report Print"<br> S ZTRTN="DEQUE^ORWRPP"<br> F I="ORDFN","ORRPTID","ORHSTYPE","ORDTRNG","OREXAMID","DUZ(","ORCOMP(","ORALPHA","OROMEGA","ORHSTAG" S ZTSAVE(I)=""<br> D ^%ZTLOAD<br> I $D(ZTSK) D<br> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br> E  D<br> . S ORY="99^Task Rejected."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}