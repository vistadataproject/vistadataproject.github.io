---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG FILEMAN FIELD ATTS
# MAG FILEMAN FIELD ATTS

This remote procedure returns a list of attributes and attribute values for a field in a FileMan file.

Property | Value
--- | ---
Label | FIELDATT
Routine | [MAGUFFLA](http://code.osehra.org/dox/Routine_MAGUFFLA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILENO | LITERAL | 20 | true | This is the number of a FileMan file or subfile.
FIELDNO | LITERAL | 20 | true | This is the field within the specified FileMan file or subfile for which attributes are being requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}