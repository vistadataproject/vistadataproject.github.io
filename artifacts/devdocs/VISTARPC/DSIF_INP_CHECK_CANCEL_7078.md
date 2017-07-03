---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP CHECK CANCEL 7078
# DSIF INP CHECK CANCEL 7078

This RPC does some basic checks on a 7078 to see if can be cancelled.

Property | Value
--- | ---
Label | CANCHK
Routine | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Pointer to file 162.4 VA FORM 10-7078 (Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}