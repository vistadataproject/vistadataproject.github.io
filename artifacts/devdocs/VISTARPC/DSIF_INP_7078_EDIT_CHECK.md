---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP 7078 EDIT CHECK
# DSIF INP 7078 EDIT CHECK

This RPC is used to see if there is at least one payment on file for a given 7078.  This is needed by the GUI so it won't allow the user to edit a 7078 if a payment exists.

Property | Value
--- | ---
Label | EDTCHK
Routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number for 7078



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}