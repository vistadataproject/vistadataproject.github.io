---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR CHECK PREV REQ<br/>
# DSIR CHECK PREV REQ

This RPC checks for previous request for the current patient and requestor. It then returns an array of entries in file 19620 ROI INSTANCE.

## Properties

Property | Value
--- | ---
Label | CHECKCUR
MUMPS Implementation | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 999 | true | This is the DFN of the patient.
REQUESTOR | LITERAL | 999 | true | This is the IEN of the requestor in file 19620.12 DSIR NEW REQUESTOR.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}