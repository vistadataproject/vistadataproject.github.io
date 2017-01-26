---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT REMOTE REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT REMOTE REPORT{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Report tab in CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Name of the device where the report should print. Format: <device name> ; <right margin> ; <page length> Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Identification number of the desired report.{:/} | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of remote handles to print for.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMOTE^[ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 Method comment | Print data for remote sites
 Input parameters | {::nomarkdown}ORIO, ORDFN, ORRPTID, ORHANDS{:/}
 First comment | {::nomarkdown}<pre>  RPC: ORWRP PRINT REMOTE REPORT</pre>{:/}
 Code | {::nomarkdown}  N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG,ZTIO<br> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br> S ZTIO=ORIO,ZTDTH=$H<br> S ZTDESC="Remote Report Print"<br> S ZTRTN="DEQUE^ORWRPP"<br> F I="ORDFN","ORRPTID","ORHANDS(","ORHSTAG" S ZTSAVE(I)=""<br> D ^%ZTLOAD<br> I $D(ZTSK) D<br> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br> E  D<br> . S ORY="99^Task Rejected."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}