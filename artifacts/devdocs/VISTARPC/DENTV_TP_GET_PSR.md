---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP GET PSR<br/>
# DENTV TP GET PSR

Returns all of the PSR type records from the Treatment Plan Transaction/Exam file (#228.2) for a particular patient.

## Properties

Property | Value
--- | ---
Label | PSR
MUMPS Implementation | [DENTVTP3](http://code.osehra.org/dox/Routine_DENTVTP3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}