---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET RAD PERSON<br/>
# MAG DICOM GET RAD PERSON

Returns list of names from the NEW PERSON file (#200) with a Rad/Nuc class.

## Properties

Property | Value
--- | ---
Label | RADLST
MUMPS Implementation | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLASS | LITERAL | 30 | true | This is the RAD/NUC classification used to correlate matching entries.Input value: T (technologist), R (resident), S (staff), or C (clerk). 
NAME | LITERAL | 30 | true | This is the name to be used in the lookup process.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}