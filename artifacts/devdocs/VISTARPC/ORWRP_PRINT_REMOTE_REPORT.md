---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP PRINT REMOTE REPORT
# ORWRP PRINT REMOTE REPORT

 This rpc is used to print a remote report on the Report tab in CPRS.

Property | Value
--- | ---
Label | REMOTE
Routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DEVICE | LITERAL | 100 | true |  Name of the device where the report should print. Format: &lt;device name&gt; ; &lt;right margin&gt; ; &lt;page length&gt; Right margin and page length are optional.
DFN | LITERAL | 20 | true |  Internal entry number of entry in the Patient file.
REPORT ID | LITERAL | 20 | true |  Identification number of the desired report.
HANDLE | LIST |  |  | List of remote handles to print for.



### MUMPS Method Description

Property | Value
--- | ---
Method | [REMOTE^ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
Method Comment | Print data for remote sites
Input Parameters | ORIO, ORDFN, ORRPTID, ORHANDS
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP PRINT REMOTE REPORT</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG,ZTIO<br/> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="Remote Report Print"<br/> S ZTRTN="DEQUE^ORWRPP"<br/> F I="ORDFN","ORRPTID","ORHANDS(","ORHSTAG" S ZTSAVE(I)=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}