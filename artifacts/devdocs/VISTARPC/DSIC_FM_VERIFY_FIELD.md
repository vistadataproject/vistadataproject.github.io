---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC FM VERIFY FIELD<br/>
# DSIC FM VERIFY FIELD

This will verify whether or not a field exists in a file (or subfile).

## Properties

Property | Value
--- | ---
Label | VFIELD
Routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 30 | true | This is the number of the file (or subfile) or the full file name which contains the field to be verified.
FIELD | LITERAL | 30 | true | This the the number of the field or its full field name.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}