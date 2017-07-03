---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV MONITOR POLL
# DENTV MONITOR POLL

See if the monitor background job has finished and if so, get theresults from the DENTAL PATIENT (#220) file.

Property | Value
--- | ---
Label | POLL
Routine | [DENTVM1](http://code.osehra.org/dox/Routine_DENTVM1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Contains the patient pointer (DFN).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}