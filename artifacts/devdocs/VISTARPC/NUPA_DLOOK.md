---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA DLOOK
# NUPA DLOOK

Does a lookup on the B Xref of a file, and does not convert dates orpointers.

Property | Value
--- | ---
Label | DLOOK
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | File number to do the lookup on.
VAL | LITERAL |  | true | Value to lookup.
TYPE | LITERAL |  | true | Type of file to lookup - variable pointer or date.
SCR | LITERAL |  | true | Fileman screen for the lookup.
IND | LITERAL |  | true | Index to lookup the data on.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}