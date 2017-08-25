---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA WP GET<br/>
# NUPA WP GET

Returns data from a Word Processing field.

## Properties

Property | Value
--- | ---
Label | WPGET
MUMPS Implementation | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL |  | true | File to get the data from, in ^FILE(subscript, format.
IEN | LITERAL |  | true | Line number for the data to be put into, in number_&quot;,&quot; formatsuch as &quot;1,&quot;.
NODE | LITERAL |  | true | Node in the global to pull the data from, such as node 2.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}