---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP GET HNC
# DENTV TP GET HNC

Returns all of the Head&Neck records from the Treatment Plan Transaction/Exam file (#228.2) for a particular patient.

Property | Value
--- | ---
Label | HNC
Routine | [DENTVTP3](http://code.osehra.org/dox/Routine_DENTVTP3_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}