---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRA IMAGING EXAMS1<br/>
# ORWRA IMAGING EXAMS1

This remote procedure call returns a list on imaging exams for aspecific patient.

## Properties

Property | Value
--- | ---
Label | EXAMS1
MUMPS Implementation | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].



## MUMPS Method Description

Property | Value
--- | ---
Method | [EXAMS1^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Method Comment | Return imaging exams
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> RPC: ORWRA IMAGING EXAMS1<br/>  See RPC definition for details on input and output parameters</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D GET(1)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}