---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRA REPORT TEXT1<br/>
# ORWRA REPORT TEXT1

This remote procedure call returns an array containinga formattied imaging report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.

## Properties

Property | Value
--- | ---
Label | RPT1
Routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].
EXAMID | LITERAL | 20 | true | Imaging exam ID. Format: Inverse FM date/time of Exam_-_Case IENExample: 7049175.8893-1



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPT1^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Method Comment | return imaging report
Input Parameters | DFN, ORID, ALPHA, OMEGA, DTRANGE, REMOTE, ORMAX, ORFHIE
Code | {::nomarkdown}<pre><code> D RPT(.ROOT,.DFN,.ORID,.ALPHA,.OMEGA,.DTRANGE,.REMOTE,.ORMAX,.ORFHIE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}