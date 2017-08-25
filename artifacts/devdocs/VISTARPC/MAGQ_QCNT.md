---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ QCNT<br/>
# MAGQ QCNT

This call resets the Queue pointer settings in the Imaging Queue Pointer file, #2006.031.

## Properties

Property | Value
--- | ---
Label | QCNT
MUMPS Implementation | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
place | LITERAL | 999 | true | This field represents the internal entry number of the site parameter file, #2006.1.
QUEUE | LITERAL | 33 | true | This is the queue entry to be updated by this method.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}