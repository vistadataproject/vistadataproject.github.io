---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR UPDATE FOIA OFFSETS
# DSIR UPDATE FOIA OFFSETS

This RPC updates the manually entered offsets for the annual FOIA report.

Property | Value
--- | ---
Label | MANUFOIA
Routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FOIA | LITERAL | 99 | true | This is the internal number from file 19620.3.
DATA | LIST | 99 | true | This is an array &#x27;^&#x27; delimited containing the following:         Field Number (File 19620.3) ^ Numeric Value to store Field numbers must be 100.02 thru 137.02 and all .02, the .01 fields are populated by the annual FOIA report.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}