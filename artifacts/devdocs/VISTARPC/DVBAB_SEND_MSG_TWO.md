---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB SEND MSG TWO
# DVBAB SEND MSG TWO

THIS RPC IS THE SECOND FOR THE CAPRI MSG 2507 EXAMTHIS ONE PRODUCES A MESSAGE FOR EACH EXAM THAT IS COMPLETED

Property | Value
--- | ---
Label | MSG2
Routine | [DVBAB1A](http://code.osehra.org/dox/Routine_DVBAB1A_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DUZ | LITERAL |  |  | PERSON FILE DFN
RIEN | LITERAL |  |  | 2507 REQUEST IEN #396.3
ELIST | LIST |  |  | 2507 EXAM LIST #396.4



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}