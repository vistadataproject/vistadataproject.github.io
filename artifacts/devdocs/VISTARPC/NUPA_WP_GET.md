---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA WP GET
# NUPA WP GET

Returns data from a Word Processing field.

Property | Value
--- | ---
Label | WPGET
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | File to get the data from, in ^FILE(subscript, format.
IEN | LITERAL |  | true | Line number for the data to be put into, in number_&quot;,&quot; formatsuch as &quot;1,&quot;.
NODE | LITERAL |  | true | Node in the global to pull the data from, such as node 2.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}