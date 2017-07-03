---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP CHECK OVERLAP DATES
# DSIF INP CHECK OVERLAP DATES

This RPC checks the from and to dates to make sure they do not overlap with another request.  Logic copied from FBAAUTL2.

Property | Value
--- | ---
Label | CHKOVLP
Routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required)
FBBEGDT | LITERAL | 14 | true | From Date to check (FM format, Required)
FBENDDT | LITERAL | 14 | true | To Date (FM format, Optional)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}