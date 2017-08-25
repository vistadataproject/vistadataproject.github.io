---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCS REPORT TEXT<br/>
# ORWCS REPORT TEXT

This remote procedure call returns an array containinga formattied consult report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.

## Properties

Property | Value
--- | ---
Label | RPT
MUMPS Implementation | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].
CONSULT ID | LITERAL | 20 | true | Consult ID.Format: Internal entry number to REQUEST/CONSULTATION file (#123)Example: 1000



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPT^ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
Method Comment | retrieve report text
Input Parameters | DFN, ORID
First Comment | {::nomarkdown}<pre><code>  RPC: ORWCS REPORT TEXT<br/>  See RPC definition for details on input and output parameters<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=$NA(^TMP("GMRCR",$J,"DT")) K @ORY Q:+ORID=0<br/> D DT^GMRCSLM2(ORID)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}