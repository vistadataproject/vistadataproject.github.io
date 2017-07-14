---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP PRINT LAB REPORTS<br/>
# ORWRP PRINT LAB REPORTS

This rpc is used to print a report on the Labs tabin CPRS.

## Properties

Property | Value
--- | ---
Label | PRINT
Routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: &lt;device name&gt; ; &lt;right margin&gt; ; &lt;page length&gt;Right margin and page length are optional.
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
REPORT ID | LITERAL | 20 | true | Identification number of the desired report.
DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.



## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINT^ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
Method Comment | print report entry point
Input Parameters | ORIO, ORDFN, RPTID, ORDAYSBK, ORTESTS, ORALPHA, OROMEGA
First Comment | {::nomarkdown}<pre><code>  See RPC definition for details on input and output parameters</code></pre>{:/}
Code | {::nomarkdown}<pre><code> IF '$$CHK() G PRINTQ<br/> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="GUI Lab Report Print"<br/> S ZTRTN="DEQUE^ORWRPL"<br/> S ZTSAVE("ORDFN")="",ZTSAVE("RPTID")="",ZTSAVE("ORDAYSBK")="",ZTSAVE("DUZ(")="",ZTSAVE("ORTESTS(")="",ZTSAVE("ORALPHA")="",ZTSAVE("OROMEGA")=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rLabs.pas">rLabs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}