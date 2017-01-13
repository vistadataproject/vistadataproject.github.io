---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REMOTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT LAB REMOTE{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Labs tab in CPRS. RETURN PARAMETER DESCRIPTION: If the print request was successfully queued then the Task manager task number is return. Otherwise, and error code and error description are returned. Error Code Table:       Code            Text      ----            ----        0             <Task Number>        1             No device selected        2             No report specified        3             Report type specified is not valid        4             No date range specified        6             Patient specified is not valid{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Print data for remote sites
 Input Parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>RPTID<br/>ORHANDS{:/}
 Lines | ```
 N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I
 S ZTIO=ORIO,ZTDTH=$H
 S ZTDESC="Remote Lab Report Print"
 S ZTRTN="DEQUE^ORWRPL"
 F I="ORDFN","RPTID","ORHANDS(" S ZTSAVE(I)=""
 D ^%ZTLOAD
 I $D(ZTSK) D
 . S ORY="0^Report queued. (Task #"_ZTSK_")"
 E  D
 . S ORY="99^Task Rejected."```
 Leading comment lines | {::nomarkdown}RPC: ORWRP PRINT REMOTE REPORT{:/}




 Generated on January 13th 2017, 6:55:29 am