---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRLTRS DELETE<br/>
# DSIRLTRS DELETE

This RPC will delete entries from file 19620.16 (DSIR LOCAL LETTERS) provided the letter specified is not flagged as a "National" letter.  Certain letter titles are required by the GUI to exist and as such are not to be removed from this file.

## Properties

Property | Value
--- | ---
Label | DELETE
MUMPS Implementation | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number to file 19620.16 (DSIR LOCAL LETTERS) (Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}