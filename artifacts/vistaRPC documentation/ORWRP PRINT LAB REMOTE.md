---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REMOTE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT LAB REMOTE{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Labs tab in CPRS. RETURN PARAMETER DESCRIPTION: If the print request was successfully queued then the Task manager task number is return. Otherwise, and error code and error description are returned. Error Code Table:       Code            Text      ----            ----        0             <Task Number>        1             No device selected        2             No report specified        3             Report type specified is not valid        4             No date range specified        6             Patient specified is not valid{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | REMOTE^[ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 Method comment | Print data for remote sites
 First comment | {::nomarkdown}RPC: ORWRP PRINT REMOTE REPORT{:/}
 Input parameters | {::nomarkdown}ORIO<br/>ORDFN<br/>RPTID<br/>ORHANDS{:/}
 Code | ```  N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I
 S ZTIO=ORIO,ZTDTH=$H
 S ZTDESC="Remote Lab Report Print"
 S ZTRTN="DEQUE^ORWRPL"
 F I="ORDFN","RPTID","ORHANDS(" S ZTSAVE(I)=""
 D ^%ZTLOAD
 I $D(ZTSK) D
 . S ORY="0^Report queued. (Task #"_ZTSK_")"
 E  D
 . S ORY="99^Task Rejected."```




 Generated on January 14th 2017, 7:26:35 am