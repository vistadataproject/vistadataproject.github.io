---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA WP SET<br/>
# NUPA WP SET

Sets data into a word processing field.

## Properties

Property | Value
--- | ---
Label | WPSET
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | File to insert the data into, in ^FILE(subscript, format.
LINE | LITERAL |  | true | Line number for the data to be put into, such as 1, 2, or 3.
DATA | LITERAL |  | true | Data (text) to insert into the global.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}