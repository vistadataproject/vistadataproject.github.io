---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP PRINT REMOTE REPORT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT REMOTE REPORT{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Report tab in CPRS.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DEVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Name of the device where the report should print. Format: <device name> ; <right margin> ; <page length> Right margin and page length are optional.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}REPORT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Identification number of the desired report.{:/} | 
| {::nomarkdown}HANDLE{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}List of remote handles to print for.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | REMOTE^[ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 Method comment | Print data for remote sites
 First comment | {::nomarkdown}RPC: ORWRP PRINT REMOTE REPORT{:/}
 Input parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>ORRPTID<br/>ORHANDS{:/}
 Code | ```  N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG,ZTIO
 S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")
 S ZTIO=ORIO,ZTDTH=$H
 S ZTDESC="Remote Report Print"
 S ZTRTN="DEQUE^ORWRPP"
 F I="ORDFN","ORRPTID","ORHANDS(","ORHSTAG" S ZTSAVE(I)=""
 D ^%ZTLOAD
 I $D(ZTSK) D
 . S ORY="0^Report queued. (Task #"_ZTSK_")"
 E  D
 . S ORY="99^Task Rejected."```




 Generated on January 14th 2017, 7:26:35 am