---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRP16 REPORT TEXT<br/>
# ORWRP16 REPORT TEXT

This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.

## Properties

Property | Value
--- | ---
Label | RPT
MUMPS Implementation | [ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file.
REPORT ID | LITERAL | 20 | true | Identification number of the desired report.
HEALTH SUMMARY TYPE | LITERAL | 20 | true | Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports.
DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.
REPORT SECTION | LITERAL | 2 | true | This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPT^ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
Method Comment | return report text
Input Parameters | DFN, RPTID, HSTYPE, DTRANGE, SECTION
First Comment | {::nomarkdown}<pre><code>  RPC: ORWRP REPORT TEXT<br/>  See RPC definition for details on input and output parameters<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> IF $G(SECTION),$D(^TMP("ORDATA",$J,SECTION)) D  G RPTQ<br/> . S ROOT=$NA(^TMP("ORDATA",$J,SECTION))<br/> K ^TMP("ORDATA",$J)<br/> S ROOT=$NA(^TMP("ORDATA",$J,1))<br/> IF RPTID=1 D HS(DFN,HSTYPE) G RPTQ<br/> IF RPTID=2 D BL(DFN) G RPTQ<br/> IF RPTID=3 D PATH(DFN) G RPTQ<br/> IF RPTID=4 D DIET(.ROOT,DFN) G RPTQ<br/> IF RPTID=5 D VITALS(DFN,DTRANGE,"VITCUM") G RPTQ<br/> IF RPTID=6 D VITALS(DFN,DTRANGE,"VIT511") G RPTQ<br/> D NOTYET(.ROOT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}