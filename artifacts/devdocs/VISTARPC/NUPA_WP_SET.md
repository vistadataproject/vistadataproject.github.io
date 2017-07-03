---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA WP SET
# NUPA WP SET

Sets data into a word processing field.

Property | Value
--- | ---
Label | WPSET
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | File to insert the data into, in ^FILE(subscript, format.
LINE | LITERAL |  | true | Line number for the data to be put into, such as 1, 2, or 3.
DATA | LITERAL |  | true | Data (text) to insert into the global.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}