---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV MONITOR QUEUE
# DENTV MONITOR QUEUE

Queues a TaskMan job to run patient dental (e.g.) Fluoride, Monitor(s).

Property | Value
--- | ---
Label | QUE
Routine | [DENTVM1](http://code.osehra.org/dox/Routine_DENTVM1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | Contains the patient pointer (DFN).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}