---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR CHECK PREV REQ
# DSIR CHECK PREV REQ

This RPC checks for previous request for the current patient and requestor. It then returns an array of entries in file 19620 ROI INSTANCE.

Property | Value
--- | ---
Label | CHECKCUR
Routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 999 | true | This is the DFN of the patient.
REQUESTOR | LITERAL | 999 | true | This is the IEN of the requestor in file 19620.12 DSIR NEW REQUESTOR.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}