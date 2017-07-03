---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DDVG XLATE IDX2DATA
# DSIC DDVG XLATE IDX2DATA

This will return the external format for an internal Fileman field value

Property | Value
--- | ---
Label | XLATE1
Routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file (or subfile) for which the external format of the the field is desired.
FIELD | LITERAL | 20 | true | This is the field number for the file (or subfile)
VALUE | LITERAL | 250 | true | This is the internal Fileman format for the data stored at FILE,FIELD.  This does not require a record number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}