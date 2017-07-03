---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRA IMAGING EXAMS
# ORWRA IMAGING EXAMS

This remote procedure call returns a list on imaging exams for aspecific patient.

Property | Value
--- | ---
Label | EXAMS
Routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT].



### MUMPS Method Description

Property | Value
--- | ---
Method | [EXAMS^ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
Method Comment | Return imaging exams
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> RPC: ORWRA IMAGING EXAMS<br/>  See RPC definition for details on input and output parameters</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D GET(0)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}