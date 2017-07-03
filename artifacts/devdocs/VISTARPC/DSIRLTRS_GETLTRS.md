---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRLTRS GETLTRS
# DSIRLTRS GETLTRS

This RPC will return the letter definition from file 19610.16 (DSIR LOCAL LETTERS) or file 19620.15 (DSIR NATIONAL LETTERS) for use by the ROI Plus GUI as needed to be printed or to edit.

Property | Value
--- | ---
Label | GETLTRS
Routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number to File 19620.15 (DSIR NATIONAL LETTERS) or 19620.16 (DSIR LOCAL LETTERS) (Required)
LOCAL | LITERAL | 1 | true | File indicator (0 - National [Default], 1 - Local) (Optional)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}