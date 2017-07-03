---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR SET ADDRESS INACTIVE
# DSIR SET ADDRESS INACTIVE

This RPC sets or resets the Address Inactive flag in the ROI Address file.

Property | Value
--- | ---
Label | TOGLINAC
Routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ADRPTR | LITERAL |  | true | ADRPTR - IEN of ADDRESS (NUMERIC)
FLAGVAL | LITERAL | 1 | true | FLAGVAL - SET OF VALUES FOR THE INACTIVE FLAG.  ZERO(0) &#x3D; ACTIVE AND ONE (1) &#x3D; INACTIVE. (NUMERIC 0 OR 1)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}