---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQ QCNT
# MAGQ QCNT

This call resets the Queue pointer settings in the Imaging Queue Pointer file, #2006.031.

Property | Value
--- | ---
Label | QCNT
Routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
place | LITERAL | 999 | true | This field represents the internal entry number of the site parameter file, #2006.1.
QUEUE | LITERAL | 33 | true | This is the queue entry to be updated by this method.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}