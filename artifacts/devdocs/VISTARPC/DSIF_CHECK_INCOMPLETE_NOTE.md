---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CHECK INCOMPLETE NOTE
# DSIF CHECK INCOMPLETE NOTE

This RPC will check to see if there is an incomplete 7078 for this patient.  If one exists then there cannot be a new request added.

Property | Value
--- | ---
Label | CHKINOT
Routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}