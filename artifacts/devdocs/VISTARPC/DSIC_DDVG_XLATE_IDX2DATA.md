---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DDVG XLATE IDX2DATA<br/>
# DSIC DDVG XLATE IDX2DATA

This will return the external format for an internal Fileman field value

## Properties

Property | Value
--- | ---
Label | XLATE1
Routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file (or subfile) for which the external format of the the field is desired.
FIELD | LITERAL | 20 | true | This is the field number for the file (or subfile)
VALUE | LITERAL | 250 | true | This is the internal Fileman format for the data stored at FILE,FIELD.  This does not require a record number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}