---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REMOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT LAB REMOTE{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} This rpc is used to print a remote report on the Labs tab in CPRS. RETURN PARAMETER DESCRIPTION: If the print request was successfully queued then the Task manager task number is return. Otherwise, and error code and error description are returned. Error Code Table:       Code            Text      ----            ----        0             <Task Number>        1             No device selected        2             No report specified        3             Report type specified is not valid        4             No date range specified        6             Patient specified is not valid{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMOTE^[ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 Method comment | Print data for remote sites
 Input parameters | {::nomarkdown}ORIO, ORDFN, RPTID, ORHANDS{:/}
 First comment | {::nomarkdown}<pre>  RPC: ORWRP PRINT REMOTE REPORT</pre>{:/}
 Code | {::nomarkdown}  N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I<br> S ZTIO=ORIO,ZTDTH=$H<br> S ZTDESC="Remote Lab Report Print"<br> S ZTRTN="DEQUE^ORWRPL"<br> F I="ORDFN","RPTID","ORHANDS(" S ZTSAVE(I)=""<br> D ^%ZTLOAD<br> I $D(ZTSK) D<br> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br> E  D<br> . S ORY="99^Task Rejected."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}