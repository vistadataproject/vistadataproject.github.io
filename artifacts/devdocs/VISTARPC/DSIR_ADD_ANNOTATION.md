---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR ADD ANNOTATION
# DSIR ADD ANNOTATION

This RPC adds entries into file 19620.98 which is for internal annotations on patients pertinent to the ROI department.

Property | Value
--- | ---
Label | ADDANNO
Routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL | 999 | true | This is the pointer to either the Patient File #2 or the DSIR Non-Computerized Patient file #19620.96. Example values:         2345;DPT(        23111;DSIR(19620.96,



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}