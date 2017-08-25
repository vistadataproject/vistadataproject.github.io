---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR SET LOCKED STATUS<br/>
# DSIR SET LOCKED STATUS

This RPC sets/resets the lock on the annual FOIA report add in numbers.

## Properties

Property | Value
--- | ---
Label | LOCKFOIA
MUMPS Implementation | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EDDT | LITERAL | 99 | true | This is the internal number of the entry in 19620.3
LSTAT | LITERAL | 1 | true | This is the lock status 0 &#x3D; Unlock, 1 &#x3D; Lock
IEN | LITERAL | 3 | true | Internal Entry Number - Required



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}