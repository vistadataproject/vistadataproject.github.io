---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWRA IMAGING EXAMS<br/>
# ORWRA IMAGING EXAMS

This remote procedure call returns a list on imaging exams for aspecific patient.

## Properties

Property | Value
--- | ---
Label | EXAMS
Routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].



## MUMPS Method Description

Property | Value
--- | ---
Method | [EXAMS^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Method Comment | Return imaging exams
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> RPC: ORWRA IMAGING EXAMS<br/>  See RPC definition for details on input and output parameters</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D GET(0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}