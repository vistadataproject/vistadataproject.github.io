---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP PAYMENT LIST
# DSIF INP PAYMENT LIST

This RPC returns a list of all entries in file 162.5 for a given entry in 7078.

Property | Value
--- | ---
Label | LOOKUP
Routine | [DSIFEP1](http://code.osehra.org/dox/Routine_DSIFEP1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FB7078 | LITERAL | 99 | true | Internal Entry Number to file 162.4



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}