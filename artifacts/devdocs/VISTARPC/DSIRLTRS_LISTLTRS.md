---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRLTRS LISTLTRS
# DSIRLTRS LISTLTRS

This RPC will return an alphabetically sorted array containing the IEN(Internal Entry Numbers) and names of the letters contianed in either file19620.15 (DSIR NATIONAL LETTERS) or file 19620.16 (DSIR LOCAL LETTERS) asspecified in the input parameter.

Property | Value
--- | ---
Label | LISTLTRS
Routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCAL | LITERAL | 1 | true | File indicator (0 - National [Default], 1 - Local) (Optional)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}