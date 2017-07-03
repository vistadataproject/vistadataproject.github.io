---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR SET LOCKED STATUS
# DSIR SET LOCKED STATUS

This RPC sets/resets the lock on the annual FOIA report add in numbers.

Property | Value
--- | ---
Label | LOCKFOIA
Routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EDDT | LITERAL | 99 | true | This is the internal number of the entry in 19620.3
LSTAT | LITERAL | 1 | true | This is the lock status 0 &#x3D; Unlock, 1 &#x3D; Lock
IEN | LITERAL | 3 | true | Internal Entry Number - Required



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}