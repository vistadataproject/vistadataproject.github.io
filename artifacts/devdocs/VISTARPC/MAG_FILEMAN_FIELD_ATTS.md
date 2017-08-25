---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG FILEMAN FIELD ATTS<br/>
# MAG FILEMAN FIELD ATTS

This remote procedure returns a list of attributes and attribute values for a field in a FileMan file.

## Properties

Property | Value
--- | ---
Label | FIELDATT
MUMPS Implementation | [MAGUFFLA](http://code.osehra.org/dox/Routine_MAGUFFLA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILENO | LITERAL | 20 | true | This is the number of a FileMan file or subfile.
FIELDNO | LITERAL | 20 | true | This is the field within the specified FileMan file or subfile for which attributes are being requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}