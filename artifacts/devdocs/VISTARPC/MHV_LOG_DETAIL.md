---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MHV LOG DETAIL<br/>
# MHV LOG DETAIL

Retrieve an MHV application log entry.

## Properties

Property | Value
--- | ---
Label | LOGDET
MUMPS Implementation | [MHVUL2](http://code.osehra.org/dox/Routine_MHVUL2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DTM | LITERAL | 15 | true | Negative Date/Time of entry in Fileman format.
JOB | LITERAL | 15 | true | Job number of log entry.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}