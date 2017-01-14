---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT REMOTE REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT REMOTE REPORT{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Report tab in CPRS.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Print data for remote sites
 Input Parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>ORRPTID<br/>ORHANDS{:/}
 Lines | {::nomarkdown} N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG,ZTIO<br/> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="Remote Report Print"<br/> S ZTRTN="DEQUE^ORWRPP"<br/> F I="ORDFN","ORRPTID","ORHANDS(","ORHSTAG" S ZTSAVE(I)=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."{:/}
 Leading comment lines | {::nomarkdown}RPC: ORWRP PRINT REMOTE REPORT{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Name of the device where the report should print. Format: <device name> ; <right margin> ; <page length> Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Identification number of the desired report.{:/} | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of remote handles to print for.{:/} | 




 Generated on January 13th 2017, 7:15:27 am