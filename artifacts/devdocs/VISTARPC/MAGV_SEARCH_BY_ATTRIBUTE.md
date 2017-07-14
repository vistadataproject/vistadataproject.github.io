---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV SEARCH BY ATTRIBUTE<br/>
# MAGV SEARCH BY ATTRIBUTE

This remote procedure accepts an array of one or more name-value pairsof FileMan field names and exact match values, and returns a list ofinternal entry numbers of matching entries.

## Properties

Property | Value
--- | ---
Label | FINDBYAT
Routine | [MAGVRS42](http://code.osehra.org/dox/Routine_MAGVRS42_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SEND | LIST | 200 | true | This is a list of name-value pairs of field names and exact match values.
FILE | LITERAL | 15 | true | This is the number of the FileMan file to be searched (e.g., 2005.61 forIMAGING PROCEDURE REFERENCE).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}