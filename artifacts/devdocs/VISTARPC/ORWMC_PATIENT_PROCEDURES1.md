---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWMC PATIENT PROCEDURES1<br/>
# ORWMC PATIENT PROCEDURES1

This remote procedure call returns a list of patient procedures for a specific patient.

## Properties

Property | Value
--- | ---
Label | PROD1
Routine | [ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].



## MUMPS Method Description

Property | Value
--- | ---
Method | [PROD1^ORWMC](http://code.osehra.org/dox/Routine_ORWMC_source.html)
Method Comment | Return procedures
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> RPC: ORWMC PROCEDURES<br/>  See RPC definition for details on input and output parameters</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D GET(1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}