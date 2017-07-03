---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP CANCEL 7078
# DSIF INP CANCEL 7078

This RPC will mark the 7078 cancelled and if possible remove the Non-VA PTF record and make modifications to the 1358.  Logic cloned from existing routine FBCHC78.

Property | Value
--- | ---
Label | CAN7078
Routine | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Pointer to file 162.4 VA FORM 10-7078 (Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}