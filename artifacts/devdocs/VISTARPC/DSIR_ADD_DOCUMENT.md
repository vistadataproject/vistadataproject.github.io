---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR ADD DOCUMENT
# DSIR ADD DOCUMENT

This RPC is used to create an entry in file 19620.1 DSIR RELEASED DOCUMENT

Property | Value
--- | ---
Label | NEWITEM
Routine | [DSIROI0](http://code.osehra.org/dox/Routine_DSIROI0_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA ARRAY | LIST |  | true | Input: Array of    (1): Pointer to VEJD ROI INSTANCE (19620) file    (2): Internal Set of Codes value for document type    (3): Document IEN (If applicable)    (4): Internal Set of Codes value for document media    (5): Caption    (6): Document length    (7): Date/time of document    (8): Creator of Document: Needs to be a pointer to the NEW PERSON file    (9): Include in Billing (0 - No, 1 - Yes)   (10): Hospital Location



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}