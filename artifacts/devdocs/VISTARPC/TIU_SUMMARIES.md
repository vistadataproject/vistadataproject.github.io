---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU SUMMARIES<br/>
# TIU SUMMARIES

This API gets lists of Discharge Summaries for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.

## Properties

Property | Value
--- | ---
Label | SUMMARY
Routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is the pointer to the patient file.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SUMMARY^TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
Method Comment | Get Summaries
Input Parameters | DFN, EARLY, LATE
Code | {::nomarkdown}<pre><code> N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)<br/> S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))<br/> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br/> D CONTEXT(.TIUY,244,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}