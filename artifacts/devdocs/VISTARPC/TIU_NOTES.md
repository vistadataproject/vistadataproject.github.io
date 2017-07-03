---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU NOTES
# TIU NOTES

This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.

Property | Value
--- | ---
Label | NOTES
Routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is the pointer to the patient file.



### MUMPS Method Description

Property | Value
--- | ---
Method | [NOTES^TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
Method Comment | Get notes
Input Parameters | DFN, EARLY, LATE, PERSON, SEQUENCE
Code | {::nomarkdown}<pre><code> N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)<br/> S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))<br/> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br/> D CONTEXT(.TIUY,3,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}