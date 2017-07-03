---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP PRINT REPORT
# ORWRP PRINT REPORT

This rpc is used to print a report on the Report tabin CPRS.

Property | Value
--- | ---
Label | PRINT
Routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: &lt;device name&gt; ; &lt;right margin&gt; ; &lt;page length&gt;Right margin and page length are optional.
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
REPORT ID | LITERAL | 20 | true | Identification number of the desired report.
HEALTH SUMMARY TYPE | LITERAL | 20 | true | Internal entry number of entry in the HEALTH SUMMARY TYPEfile.This parameter is only required for Health Summary reports.
DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.
EXAM ID | LITERAL | 20 | true | Identification number of the exam.



### MUMPS Method Description

Property | Value
--- | ---
Method | [PRINT^ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
Method Comment | print report entry point
Input Parameters | ORIO, ORDFN, ORRPTID, ORHSTYPE, ORDTRNG, OREXAMID, ORCOMP, ORALPHA, OROMEGA
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP PRINT REPORT<br/>  See RPC definition for details on input and output parameters</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORHSTAG<br/> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br/> IF '$$CHK() G PRINTQ<br/> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ZTIO<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="Report Print"<br/> S ZTRTN="DEQUE^ORWRPP"<br/> F I="ORDFN","ORRPTID","ORHSTYPE","ORDTRNG","OREXAMID","DUZ(","ORCOMP(","ORALPHA","OROMEGA","ORHSTAG" S ZTSAVE(I)=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}