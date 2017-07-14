---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA LIST<br/>
# NUPA LIST

Returns a list of all entries in a file (.01 field only).  You can specifya screen, in regular Fileman format.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | File number to list data from.
SCREEN | LITERAL |  | true | Fileman screen for the lookup.
MULT | LITERAL |  | true | Subscript of a multiple to do the lookup on.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}