---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA FILE
# NUPA FILE

Files data into Fileman files.

Property | Value
--- | ---
Label | FILE
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIE | LITERAL |  | true | The file to save data to, in regular fileman format.
IEN | LITERAL |  | true | The DA variable for the DIE call, in regular fileman format.
FIELD | LITERAL |  | true | The field number to file data into, in numeric format.
VALUE | LITERAL |  | true | The value to save to the field.
SLASHES | LITERAL |  | true | The number of slashes for the DIE call, typically 3 or 4.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}