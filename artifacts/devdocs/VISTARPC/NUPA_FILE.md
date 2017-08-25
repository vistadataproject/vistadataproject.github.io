---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA FILE<br/>
# NUPA FILE

Files data into Fileman files.

## Properties

Property | Value
--- | ---
Label | FILE
MUMPS Implementation | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIE | LITERAL |  | true | The file to save data to, in regular fileman format.
IEN | LITERAL |  | true | The DA variable for the DIE call, in regular fileman format.
FIELD | LITERAL |  | true | The field number to file data into, in numeric format.
VALUE | LITERAL |  | true | The value to save to the field.
SLASHES | LITERAL |  | true | The number of slashes for the DIE call, typically 3 or 4.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}