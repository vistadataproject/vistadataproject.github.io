---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP PRINT V REPORT<br/>
# ORWRP PRINT V REPORT

This rpc is used to print a V type report on the Reports tab in CPRS

## Properties

Property | Value
--- | ---
Label | PRINTV
MUMPS Implementation | [ORWRPP1](http://code.osehra.org/dox/Routine_ORWRPP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORIO | LITERAL |  | true | 
DFN | LITERAL |  |  | 
HEADER | LITERAL |  |  | 
REPORT | WORD PROCESSING |  |  | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [PRINTV^ORWRPP1](http://code.osehra.org/dox/Routine_ORWRPP1_source.html)
Method Comment | Print data for remote sites
Input Parameters | ORIO, ORDFN, ORHEAD, ORRPT
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP PRINT V REPORT</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ZTDTH,ZTRTN,ZTSK,ZTDESC,ZTSAVE,I,ORHSTAG<br/> S ZTIO=ORIO,ZTDTH=$H<br/> S ZTDESC="Remote V Report Print"<br/> S ZTRTN="GETVTYPE^ORWRPP1"<br/> F I="ORDFN","ORHEAD","ORRPT(" S ZTSAVE(I)=""<br/> D ^%ZTLOAD<br/> I $D(ZTSK) D<br/> . S ORY="0^Report queued. (Task #"_ZTSK_")"<br/> E  D<br/> . S ORY="99^Task Rejected."</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}