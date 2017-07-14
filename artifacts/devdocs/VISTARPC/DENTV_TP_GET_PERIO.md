---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP GET PERIO<br/>
# DENTV TP GET PERIO

Returns all of the Perio type records from the Treatment Plan Transaction/Exam file (#228.2) for a particular patient.

## Properties

Property | Value
--- | ---
Label | PERIO
Routine | [DENTVTP3](http://code.osehra.org/dox/Routine_DENTVTP3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is a pointer to the PATIENT file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}