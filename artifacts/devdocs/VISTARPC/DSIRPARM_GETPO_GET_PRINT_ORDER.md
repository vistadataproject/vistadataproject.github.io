---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIRPARM GETPO GET PRINT ORDER
# DSIRPARM GETPO GET PRINT ORDER

This RPC will return the document Print Order for the specified ROI type and facility.

Property | Value
--- | ---
Label | GETPO
Routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PRTORD | LITERAL | 30 | true | Print Order Name or IEN to DSIR ROI PRINT ORDER file 19620.702.
INST | LITERAL | 99 | true | Facility IEN to file 19620.701 - Optional if PRTORD is IEN, Required if PRTORD is Free Text.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}