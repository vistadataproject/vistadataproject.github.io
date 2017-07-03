---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP PRINT LAB REMOTE
# ORWRP PRINT LAB REMOTE

 This rpc is used to print a remote report on the Labs tab in CPRS. RETURN PARAMETER DESCRIPTION: If the print request was successfully queued then the Task manager task number is return. Otherwise, and error code and error description are returned. Error Code Table:       Code            Text      ----            ----        0             <Task Number>        1             No device selected        2             No report specified        3             Report type specified is not valid        4             No date range specified        6             Patient specified is not valid

Property | Value
--- | ---
Label | REMOTE
Routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [REMOTE^ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Method Comment | Print data for remote sites
Input Parameters | ORIO, ORDFN, RPTID, ORHANDS
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP PRINT REMOTE REPORT</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="Remote Lab Report Print"<br/> S ZTRTN="DEQUE^ORWRPL"<br/> F I="ORDFN","RPTID","ORHANDS(" S ZTSAVE(I)=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}